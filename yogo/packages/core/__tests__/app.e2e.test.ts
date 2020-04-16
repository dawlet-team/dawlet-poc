import { bootstrap } from "../src/bootstrap";
import { ApolloServer } from "apollo-server";
import {
  createTestClient,
  ApolloServerTestClient
} from "apollo-server-testing";
import { createGroupQuery, findGroupByQuery, pushNoteMutation } from './helpers/test-queries'

describe("e2e", () => {
  let server: ApolloServer;
  let url: string;
  let client: ApolloServerTestClient | null = null;

  beforeAll(async () => {
    console.log("bootstrapping a server");
    ({ server, url } = await bootstrap());
    client = createTestClient(server);
  });
  afterAll(async () => {
    console.log("shutting down the server");
    await server.stop();
    client = null;
  });
  it("server is defined", () => {
    expect(server).toBeDefined();
    expect(url).toBe("http://localhost:4000/");
  });
  it("client is defined", () => {
    expect(client).toBeDefined();
  });

  describe("Group", () => {
    it("creates groups", async () => {
      const res = await client?.query({
        query: createGroupQuery
      });
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "createGroup": Object {
            "id": "my-group",
            "notes": Array [],
          },
        }
      `);
    });
    it("finds groups", async () => {
      const res = await client?.query({
        query: findGroupByQuery
      });
      expect(res?.data).toMatchInlineSnapshot(`
Object {
  "findGroupBy": Object {
    "id": "my-group",
    "notes": Array [],
  },
}
`);
    });
    it("pushes notes to groups", async () => {
      const res = await client?.mutate({
        mutation: pushNoteMutation
      });
      expect(res?.data).toMatchInlineSnapshot(`
Object {
  "pushNote": Object {
    "id": "my-group",
    "notes": Array [
      Object {
        "duration": 400,
        "freq": 440,
        "id": "4",
        "offset": 45,
      },
    ],
  },
}
`);
    });
  });
});
