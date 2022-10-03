import express from 'express';
import fetch from 'node-fetch';

const PORT = 8080;
const app = express();

app.get('/timestamp', (_, res) => {
   const timestamp = new Date();
   res.send({ timestamp });
});

app.get('/request-timestamp', async (_, res) => {
   const fetchResponse = await fetch('http://127.0.0.1:8000/timestamp');
   const data = await fetchResponse.json();
   res.send({ requestedTimestamp: data.timestamp });
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
