import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlwares/auth';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'Projeto Faze 2 acampanhamento da aula' })
);

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

/*
 * Nesse ponto definimos que authMiddleware sera uma função global.
 * Todas as rotas abaixo antes de chamar o controller vai executar a
 * função de autenticação.
 */
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
