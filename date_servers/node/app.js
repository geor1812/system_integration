import express from 'express';

const PORT = 8080;
const app = express();

app.get('/timestamp', (_, res) => {
   const timestamp = new Date();
   res.send({ timestamp });
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
