const { ApolloServer, gql } = require('apollo-server');
//const sessions = require('./data/sessions.json')
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = gql`
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
    ):[Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}
type Speaker {
    id: ID!
    bio: String
    name: String
    featured: Boolean
    sessions: [Session]
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
  track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future...")
  level: String
}`
const resolvers = {
  Query: {
    /*
    sessions: () => {
        return sessions;
    }
    */
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    }
    , sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    }
    , speakers: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSpeakers();
    }
    , speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSpeakers(id);
    }
  }
};

const dataSources = () => ({
  sessionAPI: new SessionAPI()
  , speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({
  typeDefs
  , resolvers
  , dataSources
  //  , introspection: false
  //  , playground: false 
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
})