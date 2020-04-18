declare namespace Dawlet {
  export interface Config {
    name: string;
    description: string;
    localizable: boolean;
  }

  namespace IGroup {
    type Record = {
      id: string
      noteIds: string[]
    }
    type Store = {
      [id: string]: Record
    }
    interface Entity {
      /**
       * unique identifier
       */
      id: string
      /**
       * Notes belonging to the group
       */
      notes: INote.Entity[]
    }
    interface Service {
      /**
       * creates a new group
       */
      create(id: string): Entity
      /**
       * Retrieves the specified group
       */
      findBy(id: string): Entity
      /**
       * Add notes to the group
       */
      push(pushNoteInput: PushNoteInput): Entity
    }

    interface PushNoteInput {
      groupId: string
      notes: Omit<INote.Entity, 'id'>[]
    }
  }

  namespace INote {
    interface Store {
      [key: string]: Entity
    }
    interface Entity {
      /**
       * unique identifier
       */
      id: string
      /**
       * Pitch represented in Hz
       */
      freq: number
      /**
       * Duration of the note
       */
      duration: number
      /**
       * Offset of the note from the beginning of the score.
       */
      offset: number
    }

    type createNoteInputs = {
      freq: number
      duration: number
      offset: number
      groupIds?: string[]
    }

    interface Service {
      /**
       * create a new note
       */
      create(input: createNoteInputs): Entity
    }

  }
}