import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const checkIsprovider = User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });
    if (!checkIsprovider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifcation' });
    }

    const notifcations = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);
    return res.json(notifcations);
  }
}
export default new NotificationController();
