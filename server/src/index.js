import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { apiRoute } from './routes';
import morgan from 'morgan';
import connectDb from './db';
import config from './config';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  next();
})
// routes
app.use('/api', apiRoute);

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// error 404
app.use(function (req, res, next) {
  res.status(404);
  res.send({ error: 'Not found' });
  return;
});

// internal errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message });
  return;
});

// connect to DB
connectDb(config.dbUrl);

// run serve
app.listen(config.port, () => {
  console.log(`Started on port ${config.port}`);
});


export default app;