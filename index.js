const { ApolloServer, gql } = require('apollo-server');
//const sessions = require('./data/sessions.json')
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require('./schema.js')
const resolvers = require('./resolver.js')

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