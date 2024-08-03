import express, { type Express } from 'express';
import cors from 'cors';

const createApp = (): Express => {
  const app = express();

  app.disable('x-powered-by');

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/', (req, res) => {
    return res.send('Hello World!');
  });
  app.get('/status', (_, res) => {
    return res.json({ ok: true });
  });

  return app;
};

export default createApp;
