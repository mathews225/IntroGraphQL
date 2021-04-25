//const _ = require('lodash');

module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
        const allSessions = dataSources.sessionAPI.getSessions(args);
        return allSessions;
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        const allSessions = dataSources.sessionAPI.getSessionById(id);
        return allSessions;
    },
    speakers: (parent, args, { dataSources }, info) => {
        const allSpeakers = dataSources.speakerAPI.getSpeakers(args);
        return allSpeakers;
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
        const speaker = dataSources.speakerAPI.getSpeakerById(id);
        return speaker;
    },
};