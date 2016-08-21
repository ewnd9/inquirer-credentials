'use strict';

var inquirerCredentials = require('../');

var username = {
  name: 'username',
  type: 'input',
  hint: 'large multiline hint',
  env: 'USERNAME'
};

var password = {
  name: 'password',
  type: 'password',
  env: 'PASSWORD'
};

var creds = inquirerCredentials('.test');

creds
  .run([username, password])
  .then(function(result) {
    console.log(result.data);
  })
  .catch(err => console.log(err.stack || err));
