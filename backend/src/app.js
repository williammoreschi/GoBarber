import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import Youch from 'youch';
import path from 'path';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import io from 'socket.io';
import http from 'http';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database/index';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    Sentry.init(sentryConfig);

    this.socket();
    this.connectedUsers = {};

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  socket() {
    this.io = io(this.server);

    this.io.on('connection', socket => {
      const { user_id } = socket.handshake.query;

      const connected = this.connectedUsers[user_id];
      if (connected) {
        this.io
          .to(connected)
          .emit('logout', 'Atingiu o maximo de login simultâneo');
      }

      this.connectedUsers[user_id] = socket.id;

      socket.on('disconnect', () => {
        delete this.connectedUsers[user_id];
      });
    });
  }

  middlewares() {
    this.app.use(Sentry.Handlers.requestHandler());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );

    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;
      next();
    });
  }

  routes() {
    this.app.use(routes);
    this.app.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
