import faker from "faker";
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import { GetServerSideProps } from "next";
import { getUsers } from "../hooks/useUsers";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
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

      this.post("/users");
      this.get("/users/:id");
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = this.serialize(schema.all("user"))
          .users.sort(
            (a: User, b: User) => (b.created_at as any) - (a.created_at as any)
          )
          .slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.namespace = "";
      // todas as chamadas q passarem pelo mirage e n tive uma rota
      // não impede o direcionamento
      this.passthrough();
    },
  });

  return server;
}