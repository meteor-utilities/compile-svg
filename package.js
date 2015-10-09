Package.describe({
  name: "utilities:compile-svg",
  summary: "Gather SVG files and make them available as a single sprite",
  version: "0.1.1"
});

Package.registerBuildPlugin({
  name: "compileSVG",
  use: [
    'caching-html-compiler@1.0.1',
    'ecmascript@0.1.4',
    'templating-tools@1.0.0',
    'underscore@1.0.4'
  ],
  sources: ['lib/compile-svg.js'],
  npmDependencies: {
    "svg-sprite": "1.2.11"
  }
});

Package.onUse(function (api) {

  api.use([
    'meteor-base@1.0.1',
    'blaze-html-templates@1.0.1',
    'isobuild:compiler-plugin@1.0.0'
  ]);

  api.addFiles([
    // "lib/svg.html", // alternate method for helper, not used
    "lib/helper.js",
    "lib/svg.css"
  ], "client");

});