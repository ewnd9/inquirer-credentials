# inquirer-credentials

## Install

```
$ npm install inquirer-credentials --save
```

## Usage

```
var inquirerCredentials = require('inquirer-credentials');

var username = {
  name: 'username',
  type: 'input',
  hint: 'large multiline hint',
  env: 'USERNAME' // uses process.env['USERNAME'] if exists and don't ask user
};

var password = {
  name: 'password',
  type: 'password',
  env: 'PASSWORD' // uses process.env['PASSWORD'] if exists and don't ask user
};

inquirerCredentials('.test', [username, password]).then(function(result) {
  console.log(result);
  // { username: 'string', password: 'string' }
});

```

## License

MIT © [ewnd9](http://ewnd9.com)
