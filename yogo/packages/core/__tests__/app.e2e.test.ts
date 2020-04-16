import { bootstrap } from "../src/bootstrap";
import { ApolloServer } from "apollo-server";
import {
  createTestClient,
  ApolloServerTestClient
} from "apollo-server-testing";
import { CREATE_GROUP, FIND_GROUP_BY, PUSH_NOTE } from './helpers/queries'

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
      const res = await client?.mutate({
        mutation: CREATE_GROUP,
        variables: {
          id: 'my-group'
        }
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
        query: FIND_GROUP_BY,
        variables: {
          id: 'my-group'
        }
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
        mutation: PUSH_NOTE,
        variables: {
          id: 'my-group',
          payload: {
            notes: [
              {
                id: "4",
                freq: 440,
                duration: 400,
                offset: 45
              }
            ]
          }
        }
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
