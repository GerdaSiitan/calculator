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
    }
  })
  .help()
  .argv;

    const result = argv.value1 + argv.value2;
    console.log(`Result: ${result}`);

yargs.parse();

//ma ei tea , mis ma tegin, vähemalt ma sain aru mis ma kirjutasin ning vähemalt see töötab.