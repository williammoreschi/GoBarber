import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  /**
   * essa funcao vai ser a tarefa que vai ser executada toda vez que chamarmos
   * o job cancelar agendamento
   */

  async handle({ data }) {
    const { appointment } = data;
    const formattedDate = format(
      parseISO(appointment.date),
      "'dia' dd 'de' MMMM', às ' H:mm'h'",
      { locale: pt }
    );

    // console.log('A Fila executou');

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento Cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: formattedDate,
      },
    });
  }
}
export default new CancellationMail();
