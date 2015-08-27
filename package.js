Package.describe({
  name: "3stack:sanitize-filename",
  version: "1.4.2",
  summary: 'https://github.com/parshap/node-sanitize-filename',
  git: 'https://github.com/3stack-software/meteor-sanitize-filename',
  documentation: null
});

Npm.depends({
  "sanitize-filename": "1.4.2"
});

Package.onUse(function(api){
  api.export('sanitizeFilename');
  api.use('cosmos:browserify@0.4.0');
  api.addFiles([
    'sanitize-filename.browserify.js'
  ]);
});
