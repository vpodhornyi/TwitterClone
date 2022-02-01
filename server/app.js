import express from 'express';

const app = express();

app.use(express.json());
app.get('/ping', (req, res) => {
  res.status(200).end('pong');
})

export default app;
