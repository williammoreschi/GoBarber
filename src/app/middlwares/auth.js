import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // console.log(authHeader);

  // const [bearer, token] = authHeader.split(' ');
  const [, token] = authHeader.split(' ');

  try {
    // jwt.verify(token, authConfig.secret, (err,resuilt) => {});
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // console.log(decoded);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
