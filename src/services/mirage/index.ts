import faker from "faker";
import { createServer, Factory, Model, Response } from "miragejs";

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
    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.name.firstName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 200);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750; // 750ms

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.post("/users");

      this.namespace = "";
      // todas as chamadas q passarem pelo mirage e n tive uma rota
      // não impede o direcionamento
      this.passthrough();
    },
  });

  return server;
}
