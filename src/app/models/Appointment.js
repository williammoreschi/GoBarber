import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.USer, { foreignKey: 'id', as: 'user' });
    this.belongsTo(models.USer, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
