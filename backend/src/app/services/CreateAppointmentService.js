import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import User from '../models/User';
import Appointment from '../models/Appointment';
import Notification from '../schemas/Notification';

class CreateAppointmentService {
  async run({ provider_id, user_id, date, ownerSocket, sokcket }) {
    /*
     * Check if provider_id is a provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      throw new Error('You can only create appointments with provider');
    }

    if (provider_id === user_id) {
      throw new Error('You do not can create appointment for yourself');
    }

    /**
     * parseISO: transforma a string date em um objeto do tipo date do JS
     * startOfHour: vai transformar nossos minutos e segundos zero
     * ex: 17:25:31 -> 17:00:00
     */
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted');
    }

    /**
     * Verificar se pode ser salva um agendamento no horário escolhido
     */
    const checkAvailability = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    });

    if (checkAvailability) {
      throw new Error('Appointment date is not available');
    }

    const appointment = await Appointment.create({
      user_id,
      provider_id,
      date: hourStart,
    });

    /**
     * Notificar o prestador de serviço
     * ex: dia 10 de Fevereiro às 22:00h
     */
    const user = await User.findByPk(user_id);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às ' H:mm'h'",
      { locale: pt }
    );

    const notification = await Notification.create({
      content: `Novo agendamento ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    if (ownerSocket) {
      sokcket.to(ownerSocket).emit('notification', notification);
    }

    return appointment;
  }
}

export default new CreateAppointmentService();
