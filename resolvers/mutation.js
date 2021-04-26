module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    const sessions = dataSources.sessionAPI.toggleFavoriteSession(id);
    return sessions;
  }
  //toggleFavoriteSession(id) {
  //  const session = _.filter(sessions, { id: parseInt(id) });
  //  session[0].favorite = !session[0].favorite;
  //  return session[0];
  //}
  //,  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
  //  const sessions = dataSources.sessionsAPI.makeSpeakerFeatured(id);
  //  return sessions;
  //}
  , addNewSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(session);
  }
};