import xml.etree.ElementTree as ET
import yaml
import csv
import json

def read_txt(path):
    with open(path) as f:
        text = f.read()
        return(text)

def read_xml(path):
    tree = ET.parse(path)
    root = tree.getroot()
    tagText = []
    for child in root:
        tagText.append([child.tag, child.text])
    return tagText

def read_yaml(path):
    with open(path) as f:
        data = yaml.safe_load(f)
        return data

def read_csv(path):
    data = []
    with open(path) as f:
        reader = csv.reader(f)
        for row in reader:
            data.append(row)
        f.close()
    return data

def read_json(path):
    with open(path) as f:
        data = json.load(f)
        return(data)
