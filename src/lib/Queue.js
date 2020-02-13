import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};
    this.init();
  }

  /**
   * Percorremos o jobs e pra cada job criamos uma nova fila e dentro de cada
   * fila armazenamos o nosso Bee que faz o conexão com redis onde guardamos
   * nossos dados de que executados em segundo plano, segundo parâmetro é nosso
   * handle que processa a fila recebendo os dados, nesse momento o nosso appointment
   * la no envio de email de cancelamento.
   */
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  /**
   * processQueue fica rodando em tempo real em background e fica processando os jobs que
   * são adicionados a través da função add
   */
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();
