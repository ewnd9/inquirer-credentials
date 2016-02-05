// var inquirerCredentials = require('inquirer-credentials');
var inquirerCredentials = require('../');

var appId = '6495';

var pin = {
  name: 'trakt-token',
  type: 'input',
  hint: 'Open "' + 'https://trakt.tv/pin/' + appId + '", then paste pin here',
  env: 'TRAKT_PIN'
};

inquirerCredentials('.test', [pin]).then(function(result) {
  console.log(result.data);
});
