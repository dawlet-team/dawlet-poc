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
  mutation PushNote($pushNoteInput: PushNoteInput!) {
    pushNote(pushNoteInput: $pushNoteInput){
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

export const LIST_ALL_GROUPS = gql`
  query {
    listAllGroups{
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

export const RESET_ALL_GROUPS = gql`
  mutation {
    resetAllGroups
  }
`