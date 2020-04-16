declare namespace Dawlet {
  export interface Config {
    name: string;
    description: string;
    localizable: boolean;
  }
  namespace IScore {
    interface Entity {
      /**
       * All the notes present in the score.
       */
      notes: INote.Entity[]
    }

    interface Service {
      /**
       * Retrieves the full score.
       */
      get(): Entity
      /**
       * appends a note to score
       */
      append(note: INote.Entity): Entity
    }
  }

  namespace IGroup {
    type Map = {
      [key:string]: Entity
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
      push(id:string, payload: PushNoteInput): Entity
    }

    interface PushNoteInput {
      notes: INote.Entity[]
    }
  }

  namespace INote {
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