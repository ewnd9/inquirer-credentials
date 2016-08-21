'use strict';

var inquirer = require('inquirer-bluebird');
var Promise = require('bluebird');

module.exports = function(appName) {
  var config = require('dot-file-config')(appName);

  return {
    config: config,
    run: function(questions) {
      var unknown = questions.filter(function(question) {
        return typeof config.data[question.name] === 'undefined';
      });

      if (unknown.length === 0) {
        return Promise.resolve(config);
      }

      return Promise
        .reduce(unknown, function(result, question) {
          if (question.hint) {
            console.log(question.hint);
          }

          if (question.env && process.env[question.env]) {
            config.data[question.name] = process.env[question.env];
            return true;
          }

          question.message = question.name;

          return inquirer
            .prompt(question)
            .then(function(answers) {
              Object.keys(answers).forEach(function(name) {
                config.data[name] = answers[name];
              });

              config.save();
              return true;
            });
        }, 0)
        .then(function() {
          return config;
        });
    }
  };
};
