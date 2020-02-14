import Sequileze from 'sequelize';
import mongoose from 'mongoose';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequileze(databaseConfig);

    /*
     * O primeiro map carrega as config do banco pra cada model.
     * O segundo carrega quando existir o método associate
     */
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  /**
   * useFindAndModify no meu console mostra que é uma
   * função obsoleta e que vai ser removida no proximas atualizações
   * recomento eu usar useUnifiedTopology
   */
  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      /* useFindAndModify: true, */
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
