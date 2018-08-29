export default `
  type Email {
    id: Int!
    text: String!
    completed: Boolean!
  }
  type Query {
    emails: [Email]
  }
  type Mutation {
    addEmail(text: String!): Email
  }
`;