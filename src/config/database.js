module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
