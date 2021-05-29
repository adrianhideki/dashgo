import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({} as User),
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750; // 750ms

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      // todas as chamadas q passarem pelo mirage e n tive uma rota
      // não impede o direcionamento
      this.passthrough();
    },
  });

  return server;
}
