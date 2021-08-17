/* This code is used in my AWS Lambda Proxy, and has no effect on the repo. */
"use strict";
const axios = require("axios");
const HttpsAgent = require ("agentkeepalive").HttpsAgent;

const ssm = new(require('aws-sdk/clients/ssm'))();
const httpsAgent = new HttpsAgent({
    timeout: 60000, // active socket keepalive for 60 seconds
    freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});
const keepAliveAxios = axios.create({
    httpsAgent: httpsAgent,
});

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
let accessToken, expiryTime, cold = true;

const getAccessToken = async () => {
    const path = "/spotify-tier-list-maker/";
    if (cold) {
        const params = await ssm.getParametersByPath({
            Path: "/spotify-tier-list-maker/"
        }).promise();
        accessToken = params.Parameters[0].Value;
        expiryTime = Number(params.Parameters[1].Value);
        cold = false;
    }
    const currentTime = (new Date()).getTime();
    
    const promises = [];
    if (expiryTime < currentTime) {
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
        
        try {
            const result = await keepAliveAxios.post(
                  'https://accounts.spotify.com/api/token',
                  "grant_type=client_credentials",
                  headers
            );
            accessToken = result.data["access_token"];
            expiryTime = currentTime + result.data["expires_in"] * 1000;
            
            promises.push(
                ssm.putParameter({
                    Name: path.concat("ACCESS_TOKEN"),
                    Value: accessToken,
                    Overwrite: true
                }).promise()
            );
            promises.push(
                ssm.putParameter({
                    Name: path.concat("EXPIRY_TIME"),
                    Value: expiryTime.toString(),
                    Overwrite: true
                }).promise()
            );
        } catch (error) { console.log(error); }
    }
    return promises;
};

const getSearchResult = async (url) => {
    let result = { "message": "Unable to get access token." };
    const promises = await getAccessToken();
    if (accessToken) {
        try {
            keepAliveAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            promises.push(keepAliveAxios.get(url));
            let result;
            await Promise.all(promises).then((values) => {
                result = values[values.length === 3 ? 2 : 0].data;
            });
            return result;
        } catch (error) { return { "message": "Unable to get search result." }; }
    }
    return result;
};

exports.handler = async (event) => {
    let result = { "message": "Bad request." };
    if (event.queryStringParameters && event.queryStringParameters.searchURL) {
        result = await getSearchResult(event.queryStringParameters.searchURL);
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };
    return response;
};