var inquirer = require('inquirer-bluebird');
var Promise = require('bluebird');

var _ = require('lodash');

module.exports = function(appName, questions) {
  var config = require('dot-file-config')(appName, {
    cloudSync: false
  });
  config.data.credentials = config.data.credentials || {};

  var hasEmpty = _.find(questions, function(question) {
    return typeof config.data.credentials[question.name] === 'undefined';
  });

  if (!hasEmpty) {
    return Promise.resolve(config.data.credentials);
  } else {
    var xs = _.map(questions, function(question) {
      return {
        type: question.type,
        message: question.name,
        name: question.name
      }
    });

    return inquirer.prompt(xs).then(function(answers) {
      _.each(answers, function(answer, name) {
        config.data.credentials[name] = answer;
      });
      config.save();

      return config.data.credentials;
    });
  }
};
