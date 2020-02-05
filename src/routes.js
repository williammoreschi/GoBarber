import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'Projeto Faze 2 acampanhamento da aula' })
);

routes.post('/users', UserController.store);

export default routes;
