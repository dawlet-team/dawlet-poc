import { Container } from "typedi";
import { GroupRepository } from "./repository";
import { NoteRepository } from "../note/repository";
import { NoteFactory } from "../note/factory";
describe("GroupRepository", () => {
  let noteRepo: NoteRepository;
  let groupRepo: GroupRepository;
  beforeEach(() => {
    noteRepo = Container.get(NoteRepository);
    groupRepo = Container.get(GroupRepository);
  });
  afterEach(() => {
    Container.reset();
  });
  it("is defined", () => {
    expect(groupRepo).toBeInstanceOf(GroupRepository);
  });
  it("findAll", () => {
    groupRepo.save("group-1", ["note-id"]);
    groupRepo.save("group-2", []);
    expect(groupRepo.findAll()).toMatchInlineSnapshot(`
      Object {
        "group-1": Object {
          "id": "group-1",
          "noteIds": Array [
            "note-id",
          ],
        },
        "group-2": Object {
          "id": "group-2",
          "noteIds": Array [],
        },
      }
    `);
  });
  it("findOne", () => {
    groupRepo.save("group-1", ["note-id"]);
    groupRepo.save("group-2", []);
    expect(groupRepo.findOne("group-1")).toMatchInlineSnapshot(`
      Object {
        "id": "group-1",
        "noteIds": Array [
          "note-id",
        ],
      }
    `);
  });
  it("getEntity", () => {
    const note = NoteFactory.build();
    noteRepo.save(note);
    const id = "my-group-id";
    groupRepo.save(id, [note.id]);
    const entity = groupRepo.getEntity(id);
    expect(entity).toMatchInlineSnapshot(`
      Object {
        "id": "my-group-id",
        "notes": Array [
          Object {
            "duration": 71295,
            "freq": 30714,
            "id": 1,
            "offset": 28613,
          },
        ],
      }
    `);
  });
  it("save", () => {
    const id = "my-group";
    const noteIds = ["note-id-1", "note-id-2"];
    const record = groupRepo.save(id, noteIds);
    expect(record).toEqual({
      id,
      noteIds,
    });
  });
  it("removeGroup", () => {
    groupRepo.save("my-group-id", ["note-id"]);
    const store = groupRepo.removeGroup("my-group-id");
    expect(store).toEqual({});
  });
});
