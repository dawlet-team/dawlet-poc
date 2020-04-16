import gql from 'graphql-tag'

export const CREATE_GROUP = gql`
  mutation CreateGroup($id: String!) {
    createGroup(id: $id){
      id
      notes{
        id
        freq
        duration
        offset
      }
    }
  }
`

export const FIND_GROUP_BY = gql`
  query FindGroupBy($id: String!){
    findGroupBy(id: $id){
      id
      notes {
        id
        freq
        duration
        offset
      }
    }
  }
`

export const PUSH_NOTE = gql`
  mutation PushNote($payload: PushNoteInput!, $id: String!) {
    pushNote(id: $id, payload: $payload){
      id
      notes {
        id
        freq
        duration
        offset
      }
    }
  }
`