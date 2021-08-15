/* This code is used in my AWS Lambda Proxy, and has no effect on the repo. */
const axios = require("axios");
const qs = require("qs");
const ssm = new(require('aws-sdk/clients/ssm'))();

const getAccessToken = async () => {
    const path = "/spotify-tier-list-maker/";
    const currentTime = new Date().getTime();
    const expiryTime = await ssm.getParameter({
        Name: path.concat("EXPIRY_TIME")
    }).promise();
    
    if (Number(expiryTime.Parameter.Value) < currentTime) {
        const clientInfo = await ssm.getParameters({
            Names: ["CLIENT_ID", "CLIENT_SECRET"].map(key => path.concat(key))
        }).promise();
        const clientId = clientInfo.Parameters[0].Value;
        const clientSecret = clientInfo.Parameters[1].Value;
        
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: clientId,
                password: clientSecret,
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };
      
        try {
            const result = await axios.post(
                  'https://accounts.spotify.com/api/token',
                  qs.stringify(data),
                  headers
            );
            await ssm.putParameter({
                Name: path.concat("ACCESS_TOKEN"),
                Value: result.data["access_token"],
                Overwrite: true
            }).promise();
            await ssm.putParameter({
                Name: path.concat("EXPIRY_TIME"),
                Value: (currentTime + result.data["expires_in"] * 1000).toString(),
                Overwrite: true
            }).promise();
        } catch (error) { console.log(error); }
    }
    
    const accessToken = await ssm.getParameter({
        Name: path.concat("ACCESS_TOKEN")
    }).promise();
    return accessToken.Parameter.Value;
};

const getSearchResult = async (url) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const result = await axios.get(url);
            return result.data;
        } catch (error) { return { "message": "Unable to get search result." }; }
    }
    else return { "message": "Unable to get access token." };
};

exports.handler = async (event) => {
    let result = { "message": "Bad request." };
    if (event.queryStringParameters && event.queryStringParameters.searchURL) {
        result = await getSearchResult(event.queryStringParameters.searchURL);
    }
    
    const allowedOrigin = event.headers.origin === "http://localhost:3000" ? "http://localhost:3000" : "https://ryansniu.github.io";
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": allowedOrigin,
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(result)
    };
    return response;
};