const yargs = require('yargs');

const argv = yargs
  .options({
    'value1': {
      describe: '1',
      type: 'number',
    },
    'value2': {
      describe: '2',
      type: 'number',
    },
    'sign': {
        describe: '3',
        type: 'string',
      }
  })
  .help()
  .argv;

  let result;
switch (argv.sign) {
  case '+':
    result = argv.value1 + argv.value2;
    break;
  case '-':
    result = argv.value1 - argv.value2;
    break;
}
    console.log(`Result: ${result}`);

yargs.parse();

//ma ei tea , mis ma tegin, vähemalt ma sain aru mis ma kirjutasin ning vähemalt see töötab.
// UPDATE ma olen loll