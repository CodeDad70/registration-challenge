export default `
  type Email {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Password {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Query {
    emails: [Email]
  }

  type Query {
    passwords: [Password]
  }

  type Mutation {
    addEmail(text: String!): Email
  }

  type Mutation {
    addPassword(text:String!): Email
  }

`;