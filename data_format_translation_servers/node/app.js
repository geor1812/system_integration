import express from 'express';
import { readTxt, readCsv, readJson, readXml, readYaml } from './reader.js';

const PORT = 8080;
const app = express();

app.get('/txt', (_, res) => {
   res.send({ textData: readTxt('../file.txt') });
});

app.get('/csv', async (_, res) => {
   res.send({ csvData: await readCsv('../file.csv') });
});

app.get('/json', async (_, res) => {
   res.send({ jsonData: await readJson('../file.json') });
});

app.get('/xml', async (_, res) => {
   res.send({ xmlData: readXml('../file.xml') });
});

app.get('/yaml', (_, res) => {
   res.send({ yamlData: readYaml('../file.yaml') });
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
