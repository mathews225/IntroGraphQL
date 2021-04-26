module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    const sessions = dataSources.sessionAPI.toggleFavoriteSession(id);
    return sessions;
  }
  , addNewSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(session);
  }
};