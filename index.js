var inquirer = require('inquirer-bluebird');
var Promise = require('bluebird');

var _ = require('lodash');

module.exports = function(appName, questions) {
  var config = require('dot-file-config')(appName, {
    cloudSync: false
  });
  config.data.credentials = config.data.credentials || {};

  var unknown = _.filter(questions, function(question) {
    return typeof config.data.credentials[question.name] === 'undefined';
  });

  if (unknown.length === 0) {
    return Promise.resolve(config.data.credentials);
  } else {
    return Promise.reduce(unknown, function(result, question) {
      if (question.hint) {
        console.log(question.hint);
      }

      if (question.env && process.env[question.env]) {
        config.data.credentials[question.name] = process.env[question.env];
        return true;
      }

      question.message = question.name;

      return inquirer.prompt(question).then(function(answers) {
        _.each(answers, function(answer, name) {
          config.data.credentials[name] = answer;
        });
        config.save();

        return true;
      });
    }, 0).then(function() {
      return config.data.credentials;
    }).catch(console.log.bind(console));
  }
};
