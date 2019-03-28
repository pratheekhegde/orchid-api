
export default `
scalar Date

type Query {
  contents: [Content!]!
  content(id: ID!): Content!
  campaigns: [Campaign!]!
  campaign(id: ID!): Campaign!
  publishers: [Publisher!]!
  publisher(id: ID!): Publisher!
}

type Mutation {

  # Content
  createContent(input: CreateContentInput!): Content!
  updateContent(id: ID!, input: UpdateContentInput!): Content!
  deleteContent(id: ID!): Boolean

  # Campaign
  createCampaign(input: CreateCampaignInput!): Campaign!
  updateCampaign(id: ID!, input: UpdateCampaignInput!): Campaign!
  deleteCampaign(id: ID!): Boolean
  
  # Publisher
  createPublisher(input: CreatePublisherInput!): Publisher!
  updatePublisher(id: ID!, input: UpdatePublisherInput!): Publisher!
  deletePublisher(id: ID!): Boolean
}

type Content {
  id: ID!
  name: String!
  type: String!
  isActive: Boolean!
}

input CreateContentInput {
  name: String!
  type: String!
}

input UpdateContentInput {
  name: String
  type: String
  isActive: Boolean
}

type Campaign {
  id: ID!
  name: String!
  content: Content!
  publishers: Publisher!
  isActive: String!
  startDate: Date!
  endDate: Date!
}

input CreateCampaignInput {
  name: String!
  startDate: Date!
  endDate: Date!
  content: ID!
  publishers: [ID!]!
}

input UpdateCampaignInput {
  name: String
  startDate: Date!
  endDate: Date!
  isActive: Boolean
  content: ID!
  publishers: [ID!]!
}

type Publisher {
  id: ID!
  name: String!
  isActive: Boolean!
}

input CreatePublisherInput {
  name: String!
}

input UpdatePublisherInput {
  name: String
  isActive: Boolean
}
`;