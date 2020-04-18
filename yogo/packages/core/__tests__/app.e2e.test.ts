import { bootstrap } from "../src/bootstrap";
import { ApolloServer } from "apollo-server";
import {
  createTestClient,
  ApolloServerTestClient,
} from "apollo-server-testing";
import {
  CREATE_GROUP,
  FIND_GROUP_BY,
  PUSH_NOTE,
  RESET_ALL_GROUPS,
  LIST_ALL_GROUPS,
  CREATE_NOTE,
} from "./helpers/queries";

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
          id: "my-group",
        },
      });
      expect(res?.errors).toBeUndefined();
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
          id: "my-group",
        },
      });
      expect(res?.errors).toBeUndefined();
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
          pushNoteInput: {
            groupId: "my-group",
            notes: [
              {
                freq: 440,
                duration: 400,
                offset: 45,
              },
            ],
          },
        },
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "pushNote": Object {
            "id": "my-group",
            "notes": Array [
              Object {
                "duration": 400,
                "freq": 440,
                "id": "bb463b8b-b76c-4f6a-9726-65ab5730b69b",
                "offset": 45,
              },
            ],
          },
        }
      `);
    });
    it("lists all groups", async () => {
      await client?.mutate({
        mutation: CREATE_GROUP,
        variables: {
          id: "my-second-group",
        },
      });
      const res = await client?.query({
        query: LIST_ALL_GROUPS,
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "listAllGroups": Array [
            Object {
              "id": "my-group",
              "notes": Array [
                Object {
                  "duration": 400,
                  "freq": 440,
                  "id": "bb463b8b-b76c-4f6a-9726-65ab5730b69b",
                  "offset": 45,
                },
              ],
            },
            Object {
              "id": "my-second-group",
              "notes": Array [],
            },
          ],
        }
      `);
    });
    it("clears all groups", async () => {
      const res = await client?.mutate({
        mutation: RESET_ALL_GROUPS,
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data?.resetAllGroups).toEqual(true);
    });
  });

  describe("Note", () => {
    it("createNote", async () => {
      const res = await client?.mutate({
        mutation: CREATE_NOTE,
        variables: {
          params: {
            freq: 440,
            offset: 0,
            duration: 30,
          },
        },
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "createNote": Object {
            "duration": 30,
            "freq": 440,
            "id": "a27218b8-6a4d-47bb-95b6-5a55334fac1c",
            "offset": 0,
          },
        }
      `);
    });
    it("createNote with groupIds", async () => {
      await client?.mutate({
        mutation: CREATE_GROUP,
        variables: {
          id: "my-group",
        },
      });
      await client?.mutate({
        mutation: CREATE_GROUP,
        variables: {
          id: "my-group-2",
        },
      });

      let res = await client?.query({
        query: LIST_ALL_GROUPS,
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "listAllGroups": Array [
            Object {
              "id": "my-group",
              "notes": Array [],
            },
            Object {
              "id": "my-group-2",
              "notes": Array [],
            },
          ],
        }
      `);

      await client?.mutate({
        mutation: CREATE_NOTE,
        variables: {
          params: {
            freq: 440,
            offset: 0,
            duration: 30,
            groupIds: ["my-group", "my-group-2"],
          },
        },
      });

      res = await client?.query({
        query: LIST_ALL_GROUPS,
      });
      expect(res?.errors).toBeUndefined();
      expect(res?.data).toMatchInlineSnapshot(`
        Object {
          "listAllGroups": Array [
            Object {
              "id": "my-group",
              "notes": Array [
                Object {
                  "duration": 30,
                  "freq": 440,
                  "id": "60627261-4e6c-4ebf-8879-914576ade417",
                  "offset": 0,
                },
              ],
            },
            Object {
              "id": "my-group-2",
              "notes": Array [
                Object {
                  "duration": 30,
                  "freq": 440,
                  "id": "60627261-4e6c-4ebf-8879-914576ade417",
                  "offset": 0,
                },
              ],
            },
          ],
        }
      `);
    });
  });
});
