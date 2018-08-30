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
    passwords: [Password]
  }
  type Mutation {
    addEmail(text: String!): Email
    addPassword(text:String!): Email
  }
`;