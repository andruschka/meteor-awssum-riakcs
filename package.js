Package.describe({
  name: 'andruschka:awssum-riakcs',
  summary: 'RiakCS plugin for AWSSUM',
  version: '0.1.6',
  git: 'https://github.com/andruschka/meteor-awssum-riakcs.git'
});

Npm.depends({
	'awssum-riakcs': '1.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('RiakCS', 'server');
  api.addFiles('awssum-riakcs.js', 'server');
});
