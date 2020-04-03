import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    /*
    function jwt.sign - cria nosso token 'chave' jwt recebe 3 parâmetros.
    1 - Payload dados que podem ser acessado pela nossa aplicacao no front;
    2 - Nosso token unico garente que a integridade da nossa chave;
    3 - um objeto por enquanto estamos informando que o token deve duar 7 dias;
    */
    const tokenJWT = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({ user: { id, name, email }, token: tokenJWT });
  }
}
export default new SessionController();
