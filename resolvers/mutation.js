module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    const speaker = dataSources.speakerAPI.makeSpeakerFeatured(id);
    return speaker;
  },
  addNewSession: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(args);
  }
};