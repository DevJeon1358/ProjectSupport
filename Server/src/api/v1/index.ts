import { Router } from 'express';

const v1Router = Router();
v1Router.get('/', (req, res) => {
  res.status(200).json({
    test: true,
  });
});

export default v1Router;
