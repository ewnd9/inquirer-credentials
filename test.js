import test from 'ava';
import run, { ENTER } from 'inquirer-test';
import fs from 'fs';
import userHome from 'user-home';

const cliPath = __dirname + '/examples/app.js';

test.serial('run with data input', async t => {
  const result = await(run(cliPath, ['input-1', ENTER, 'input-2', ENTER]));
  t.regexTest(new RegExp("username: 'input-1', password: 'input-2'", 'g'), result);
});

test.serial('second run with already persisted data', async t => {
  const result = await(run(cliPath, []));
  t.regexTest(new RegExp("username: 'input-1', password: 'input-2'", 'g'), result);
});
