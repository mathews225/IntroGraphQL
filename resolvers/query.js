const _ = require('lodash');

module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
        const allSessions = dataSources.sessionAPI.getSessions(args);
        return allSessions;
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        try {
            const sessions = dataSources.sessionAPI.getSessionById(id);
            return sessions;
        } catch (error) {
            return { code: 'ERROR', message: 'An error occured', token: 'Logging Error Token Goes Here' }
        }
    },
    speakers: (parent, args, { dataSources }, info) => {
        const allSpeakers = dataSources.speakerAPI.getSpeakers();
        return allSpeakers;
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
        const speaker = dataSources.speakerAPI.getSpeakerById(id);
        return speaker;
    },
};