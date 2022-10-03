from fastapi import FastAPI
from reader import read_csv, read_json, read_txt, read_xml, read_yaml

app = FastAPI()

@app.get('/')
async def _():
    return {"Hello": "World"}

@app.get('/txt')
async def _():
    data = read_txt('../file.txt')
    return {"txtData": data}

@app.get('/csv')
async def _():
    data = read_csv('../file.csv')
    return {"csvData": data}

@app.get('/json')
async def _():
    data = read_json('../file.json')
    return {"jsonData": data}

@app.get('/yaml')
async def _():
    data = read_yaml('../file.yaml')
    return {"yamlData": data}

@app.get('/xml')
async def _():
    data = read_xml('../file.xml')
    return {"xmlData": data}