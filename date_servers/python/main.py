from fastapi import FastAPI
import datetime, requests, json

app = FastAPI()

@app.get('/timestamp')
def _():
    timestamp = datetime.datetime.now()
    return {"timestamp": timestamp}

@app.get('/request-timestamp')
def _():
    response = requests.get("http://127.0.0.1:8080/timestamp")
    data = response.json()
    return {"requestedTimestamp": data['timestamp']}

