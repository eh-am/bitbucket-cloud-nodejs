'use strict';

module.exports = function (client) {
  return {
    getAll: function (team, options) {
      return client.getCollection(`teams/${team}/projects/`, options);
    },
    get: function(projectKey, team, options){
      return client.getCollection(`teams/${team}/projects/${projectKey}`, options);
    }
  }
};
