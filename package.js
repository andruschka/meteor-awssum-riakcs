Package.describe({
  name: 'andruschka:awssum-riakcs',
  summary: '',
  version: '0.1.0',
  git: 'https://github.com/andruschka/meteor-awssum-riakcs.git'
});

Npm.depends({
	'awssum-riakcs': '1.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('awssum-riakcs.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('awssum-riakcs');
  api.addFiles('awssum-riakcs-tests.js');
});
