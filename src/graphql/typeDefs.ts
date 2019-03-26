
export default `
scalar Date

type Query {
  contents: [Content!]!
  content(id: ID!): Content!
}

type Mutation {
  createContent(
    name: String!
    type: String!
  ): Content!
  updateContent(
    id: ID!
    name: String
    type: String
    isActive: Boolean
  ): Content!
  deleteContent(id: ID!): Boolean
}

type Content {
  id: ID!
  name: String!
  type: String!
  isActive: Boolean!
}

type Campaign {
  id: ID!
  name: String!
  content: Content!
  isActive: String!
  startDate: Date!
  endDate: Date!
}
`;