import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    const pathAvatar = 'http://localhost:3333/files';
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${pathAvatar}/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
