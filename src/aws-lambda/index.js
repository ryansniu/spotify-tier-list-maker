/* This code is used in my AWS Lambda Proxy, and has no effect on the repo. */
"use strict";
const axios = require("axios");
const qs = require("qs");
const ssm = new(require('aws-sdk/clients/ssm'))();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
let accessToken = undefined, expiryTime = undefined;

const getAccessToken = async () => {
    const path = "/spotify-tier-list-maker/";
    if (!accessToken || !expiryTime) {
        const params = await ssm.getParametersByPath({
            Path: "/spotify-tier-list-maker/"
        }).promise();
        accessToken = params.Parameters[0].Value;
        expiryTime = Number(params.Parameters[1].Value);
    }
    const currentTime = (new Date()).getTime();
    
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
        const data = {
            grant_type: 'client_credentials',
        };
      
        try {
            const result = await axios.post(
                  'https://accounts.spotify.com/api/token',
                  qs.stringify(data),
                  headers
            );
            accessToken = result.data["access_token"];
            expiryTime = currentTime + result.data["expires_in"] * 1000;
            await ssm.putParameter({
                Name: path.concat("ACCESS_TOKEN"),
                Value: accessToken,
                Overwrite: true
            }).promise();
            await ssm.putParameter({
                Name: path.concat("EXPIRY_TIME"),
                Value: expiryTime.toString(),
                Overwrite: true
            }).promise();
        } catch (error) { console.log(error); }
    }
};

const getSearchResult = async (url) => {
    await getAccessToken();
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
    
    const allowedOrigin = event.headers.origin === "http://localhost:3000" ? event.headers.origin : "https://ryansniu.github.io";
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