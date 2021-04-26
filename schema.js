const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
      speakers: [Speaker]
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    featured: Boolean
    sessions: [Session]
  }
  type SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
      )
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
`;