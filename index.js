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
    var xs = _.map(unknown, function(question) {
      return {
        type: question.type,
        message: question.name,
        name: question.name,
        hint: question.hint
      }
    });

    return Promise.reduce(xs, function(result, question) {
      if (question.hint) {
        console.log(question.hint);
      }

      return inquirer.prompt(question).then(function(answers) {
        _.each(answers, function(answer, name) {
          config.data.credentials[name] = answer;
        });
        config.save();

        return true;
      });
    }, 0).then(function() {
      return config.data.credentials;
    });
  }
};
