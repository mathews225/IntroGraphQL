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
      format:  String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID): SpeakerOrError
  }

  union SessionOrError = Session | Error
  union SpeakerOrError = Speaker | Error

  type Error {
    code: String
    message: String
    token: String
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

  input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format:  String
    level: String
    favorite: Boolean
    track: String
  }
    
  type Session {
    id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format:  String
    level: String
    favorite: Boolean
    track: String 
      @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future...")
    speakers: [Speaker]
  }
`;