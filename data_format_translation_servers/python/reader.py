import xml.etree.ElementTree as ET
import yaml
import csv
import json

def read_text(path):
    with open(path) as f:
        text = f.read()
        print(text)

def read_xml(path):
    tree = ET.parse(path)
    root = tree.getroot()
    for child in root:
        print(child.tag, child.text)

def read_yaml(path):
    with open(path) as f:
        data = yaml.safe_load(f)
        print(data)

def read_csv(path):
    with open(path) as f:
        reader = csv.reader(f)
        for row in reader:
            print(row)
        f.close()

def read_json(path):
    with open(path) as f:
        data = json.load(f)
        print(data)


#Running the reader functions
read_text('../file.txt')
read_xml('../file.xml')
read_yaml('../file.yaml')
read_csv('../file.csv')
read_json('../file.json')