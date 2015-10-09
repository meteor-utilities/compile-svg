Package.describe({
  name: "utilities:compile-svg",
  summary: "Get SVG images and make them available as templates",
  version: "0.1.0"
});

Package.registerBuildPlugin({
  name: "compileSVG",
  use: [
    'caching-html-compiler',
    'ecmascript',
    'templating-tools',
    'underscore'
  ],
  sources: ['lib/compile-svg.js'],
  npmDependencies: {
    "svg-sprite": "1.2.11"
  }
});

Package.onUse(function (api) {

  api.use([
    'standard-app-packages',
    'isobuild:compiler-plugin@1.0.0'
  ]);

  api.addFiles([
    // "lib/svg.html", // alternate method for helper, not used
    "lib/helper.js",
    "lib/svg.css"
  ], "client");

});