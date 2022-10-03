from fastapi import FastAPI
import datetime

app = FastAPI()

@app.get('/timestamp')
def _():
    timestamp = datetime.datetime.now()
    return {"timestamp": timestamp}
