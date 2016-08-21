'use strict';

var inquirerCredentials = require('../');

var appId = '6495';

var pin = {
  name: 'trakt-token',
  type: 'input',
  hint: 'Open "' + 'https://trakt.tv/pin/' + appId + '", then paste pin here',
  env: 'TRAKT_PIN'
};

var creds = inquirerCredentials('.test');

creds
  .run([pin])
  .then(function(result) {
    console.log(result.data);
  })
  .catch(err => console.log(err.stack || err));
