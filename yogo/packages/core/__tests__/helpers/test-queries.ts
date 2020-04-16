import gql from 'graphql-tag'

export const createGroupQuery = gql`
  mutation {
    createGroup(id: "my-group"){
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

export const findGroupByQuery = gql`
  query{
    findGroupBy(id: "my-group"){
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

export const pushNoteMutation = gql`
  mutation {
    pushNote(id:"my-group", payload: {
      notes: [
        {
          id: "4",
          freq:440,
          duration:400,
          offset:45
        }
      ]
    }){
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