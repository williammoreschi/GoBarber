import User from '../models/User';

class UserController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);
    res.json({ id, name, email, provider });
  }

  async update(req, res) {
    // console.log(req.userId);
    return res.json('xxx');
  }
}

export default new UserController();