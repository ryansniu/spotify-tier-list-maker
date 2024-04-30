import os
import json
import time
import requests
import boto3

AWS_SESSION_TOKEN = None
SPOTIFY_CLIENT_ID = None
SPOTIFY_CLIENT_SECRET = None
SSM_PATH = None

ssm = boto3.client('ssm')

def get_ssm_param(param_name):
    ssm_url = "http://localhost:2773/systemsmanager/parameters/get/?name="
    headers = {"X-Aws-Parameters-Secrets-Token": AWS_SESSION_TOKEN}
    response = requests.get(ssm_url + SSM_PATH + param_name, headers=headers)
    response.raise_for_status()
    return response.json()['Parameter']['Value']
    

def get_access_token():
    access_token = None
    expiry_time = float(get_ssm_param("EXPIRY_TIME"))
    current_time = time.time()

    if current_time > expiry_time:
        token_url = "https://accounts.spotify.com/api/token"
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        data = "grant_type=client_credentials"
        auth = (SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)

        response = requests.post(token_url, headers=headers, data=data, auth=auth)
        response.raise_for_status()
        result = response.json()

        access_token = result["access_token"]
        expiry_time = current_time + result["expires_in"]

        ssm.put_parameter(
            Name=SSM_PATH + "ACCESS_TOKEN",
            Value=access_token,
            Type='String',
            Overwrite=True
        )
        ssm.put_parameter(
            Name=SSM_PATH + "EXPIRY_TIME",
            Value=str(expiry_time - 1),  # Add a 1 second buffer just in case
            Type='String',
            Overwrite=True
        )
    else:
        access_token = get_ssm_param("ACCESS_TOKEN")

    return access_token

def get_search_result(url):
    access_token = get_access_token()
    
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    return response.text

def lambda_handler(event, context):
    result = "Unable to get request."

    if event.get('queryStringParameters') and event['queryStringParameters'].get('searchURL'):
        result = get_search_result(event['queryStringParameters']['searchURL'])

    response = {
        "statusCode": 200,
        "body": result
    }

    return response