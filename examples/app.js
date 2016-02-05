// var inquirerCredentials = require('inquirer-credentials');
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

inquirerCredentials('.test', [username, password]).then(function(result) {
  console.log(result.data);
});
