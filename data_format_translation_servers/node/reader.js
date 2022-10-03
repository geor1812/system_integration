import fs from 'fs';
import { xml2js } from 'xml-js';
import yaml from 'js-yaml';
import csv from 'csv-parser';

const readTxt = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const text = file.toString();
      return text;
   } catch (error) {
      console.log(error);
   }
};

const readXml = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const object = xml2js(file);
      return object;
   } catch (error) {
      console.log(error);
   }
};

const readYaml = (path) => {
   try {
      const file = fs.readFileSync(path, 'utf-8');
      const data = yaml.load(file);
      return data;
   } catch (error) {
      console.log(error);
   }
};

const readCsv = (path) => {
   return new Promise((resolve, reject) => {
      const results = [];
      const readStream = fs.createReadStream(path);

      readStream.pipe(csv()).on('data', (data) => results.push(data));

      readStream.on('error', () => {
         reject(e);
      });

      return readStream.on('end', () => {
         resolve(results);
      });
   });
};

const readJson = async (path) => {
   try {
      const file = fs.readFileSync(path);
      const data = JSON.parse(file);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export { readTxt, readJson, readCsv, readXml, readYaml };
