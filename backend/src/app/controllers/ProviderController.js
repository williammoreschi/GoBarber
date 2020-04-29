import User from '../models/User';
import File from '../models/File';

import Cache from '../../lib/Cache';

class ProviderController {
  async index(req, res) {
    // Verifica se a lista de prestadores já está salva em cache
    const cached = await Cache.get('providers');
    if (cached) {
      return res.json(cached);
    }
    const providers = await User.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      where: { provider: true },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    // Cria um cache da lista de prestadores
    await Cache.set('providers', providers);

    return res.json(providers);
  }
}

export default new ProviderController();
