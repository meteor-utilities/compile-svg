var SVGSpriter = Npm.require("svg-sprite");
var fs = Plugin.fs;

Plugin.registerCompiler({
  extensions: ["svg"],
  archMatching: 'web',
  filenames: []
}, function () {
  var compiler = new SVGCompiler();
  return compiler;
});

function SVGCompiler() {};

SVGCompiler.prototype.processFilesForTarget = function (files) {

  var html;

  //Iterate over files and add them to spriter
  files.forEach(function (file) { 
    var fullPath = file._resourceSlot.inputResource.path;
    var data = fs.readFileSync(fullPath, {encoding: 'utf-8'});

  });

  files[0].addHtml({section: "body", data: "<div>xxxxx</div>"});

};