const Query = require('./resolvers/query');
const Session = require('./resolvers/sessions');
//const Speaker = require('./resolvers/speakers');

module.exports = {
  Query
  , Session: {
    async speakers(session, args, { dataSources }, info) {
      //try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return returns;
    }
  }
}