import Http from 'http';
import express from 'express';
import cors from 'cors';
import api from './api';

const router = express();
const server = Http.createServer(router);

const port = process.env.PORT || 5000;

// Init Middlewares
router.use(cors());
router.use('/api', api);

// Init server
server.listen(port, () => {
  console.log(`Server is listening on port, ${port}`);
});
