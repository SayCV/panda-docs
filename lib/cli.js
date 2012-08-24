var argparse        = require('argparse');
var ArgumentParser  = argparse.ArgumentParser;

var cli = module.exports = new ArgumentParser({
  version:  require('./version'),
  addHelp:  true,
  formatterClass: function(options) {
    options['maxHelpPosition'] = 40;
    return new argparse.HelpFormatter(options);
  }
});

cli.addArgument(['-o', '--output'], {
  help:         'Resulting file(s) location [out]',
  dest:         'output',
  metavar:      'PATH',
  defaultValue: 'out'
});

cli.addArgument(['-oa', '--outputAssets'], {
  help:         'Resulting file(s) location for assets [out/assets]',
  dest:         'outputAssets',
  metavar:      'PATH',
  defaultValue: 'out/assets'
});

cli.addArgument(['--removeOutDir'], {
  help:         'Remove output dir before building',
  dest:         'removeOutDir',
  action:       'storeTrue',
  defaultValue: true
});

cli.addArgument(['-t', '--title'], {
  help:         'Title of the index page [Panda: Default Title Here]',
  dest:         'title',
  metavar:      'STRING',
  defaultValue: 'Panda: Default Title Here'
});

cli.addArgument(['--template'], {
  help:         'The location of your primary Jade template [./templates/default/layout.jade]',
  dest:         'template',
  metavar:      'PATH',
  defaultValue: './templates/default/layout.jade'
});

cli.addArgument(['--assets'], {
  help:         'The location of your asset files (CSS, Javascript, e.t.c.) [./templates/default/assets]',
  dest:         'assets',
  metavar:      'PATH',
  defaultValue: './templates/default/assets'
});

cli.addArgument(['-d', '--disableTests'], {
  help:         'Disables the test suite that runs at the end of an HTML build. This is NOT recommended.',
  dest:         'disableTests',
  action:       'storeTrue',
  defaultValue: false
});

cli.addArgument(['-nr', '--noRelease'], {
  help:         'If set, indicates that you\'re not doing a release',
  dest:         'noRelease',
  action:       'storeTrue',
  defaultValue: false
});

cli.addArgument(['--keepFirstHeader'], {
  help:         'If set, keeps the first header (<h1>) detected',
  dest:         'keepFirstHeader',
  action:       'storeTrue',
  defaultValue: false
});

cli.addArgument(['--baseUrl'], {
  help:         'Base url of all links [./]',
  dest:         'baseUrl',
  metavar:      'STRING',
  defaultValue: './'
});