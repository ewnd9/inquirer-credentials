# inquirer-credentials

[![Build Status](https://travis-ci.org/ewnd9/inquirer-credentials.svg?branch=master)](https://travis-ci.org/ewnd9/inquirer-credentials)

Credentials prompt for CLI apps

![Demonstration](/demo.gif?raw=true)

## Install

```
$ npm install inquirer-credentials --save
```

## Usage

```js
const inquirerCredentials = require('inquirer-credentials');

const username = {
  name: 'username',
  type: 'input',
  hint: 'please, tell your username',
  env: 'USERNAME' // uses process.env['USERNAME'] if exists and don't ask user
};

const password = {
  name: 'password',
  type: 'password',
  env: 'PASSWORD' // uses process.env['PASSWORD'] if exists and don't ask user
};

inquirerCredentials('.test', [username, password])
  .then(function(result) {
    result.data //=> { username: 'string', password: 'string' }
    result.save() // persists config to fs, result is an instance of https://github.com/ewnd9/dot-file-config
  })
  .catch(function(err) {
    console.log(err.stack);
  });
```

## Related

- [inquirer](https://github.com/sboudrias/Inquirer.js)
- [inquirer-test](https://github.com/ewnd9/inquirer-test)
- [inquirer-bluebird](https://github.com/ewnd9/inquirer-bluebird)
- [inquirer-question](https://github.com/ewnd9/inquirer-question)
- [inquirer-menu](https://github.com/ewnd9/inquirer-menu)

## License

MIT © [ewnd9](http://ewnd9.com)
