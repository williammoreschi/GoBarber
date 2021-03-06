const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Jack sparrow',
          email: 'sparrow@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Will Turner III',
          email: 'turner@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elizabeth Swann',
          email: 'swann@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hermione Granger',
          email: 'granger@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Albus Dumbledore',
          email: 'dumbledore@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luna Lovegood',
          email: 'lovegood@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ginevra Molly Weasley',
          email: 'g_weasley@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Severus Snape',
          email: 'snape@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sirius black',
          email: 'black@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Belatriz Lestrange',
          email: 'lestrange@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'William G. P. Moreschi',
          email: 'moreschi@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Juliana da S. Castro Moreschi',
          email: 'castro@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria José da Silva',
          email: 'silva@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Piu da S. Castro',
          email: 'piu@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rone S. Castro',
          email: 'rone@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Thyago G. P. Gallo',
          email: 'gallod@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Odete I. Pessini',
          email: 'pessini@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Polly J. da S. C. Moreschi',
          email: 'polly@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
