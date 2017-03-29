'use strict';

var async = require('async');
var utils = require('lodash');
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (client) {
  var projects = require('./projects')(client);
  var allRepos = [];

  return {
    getAll: function (team, options) {
      var self = this;
      options = options || {};

      return client.getCollection(`repositories/${team}`, options)
        .then(function (repos) {
          allRepos = _.concat(allRepos, repos.values);

          if (!repos.isLastPage) {
            // Keep previous call's args
            options.args = options.args || {};

            // Append 'start' arg
            options.args.start = repos.nextPageStart;

            return self.getAll(options);
          }
        })
        .then(function () {
          return allRepos;
        });
    },

    getByProject: function(projectKey, team, options){
      options = options || {};

      options.args = _.defaults(options.args || {}, {
        q: `project.key="${projectKey}"`,
      });

      return client.getCollection(`repositories/${team}`, options)
    },
  };
};

