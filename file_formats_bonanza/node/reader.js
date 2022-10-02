import fs from 'fs';
import { xml2js } from 'xml-js';
import yaml from 'js-yaml';
import csv from 'csv-parser';

const readText = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const text = file.toString();
      console.log(text);
      return text;
   } catch (error) {
      console.log(error);
   }
};

const readXml = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const object = xml2js(file);
      console.log(object);
      return object;
   } catch (error) {
      console.log(error);
   }
};

const readYaml = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const data = yaml.load(file);
      console.log(data);
      return data;
   } catch (error) {
      console.log(error);
   }
};

const readCsv = (path) => {
   try {
      const results = [];
      fs.createReadStream(path)
         .pipe(csv())
         .on('data', (data) => results.push(data))
         .on('end', () => {
            console.log(results);
            return results;
         });
   } catch (error) {
      console.log(error);
   }
};

const readJson = async (path) => {
   try {
      const file = fs.readFileSync(path);
      const data = JSON.parse(file);
      console.log(data);
      return data;
   } catch (error) {
      console.log(error);
   }
};

//Running the reader functions
readText('../file.txt');
readXml('../file.xml');
readYaml('../file.yaml');
readCsv('../file.csv');
readJson('../file.json');
