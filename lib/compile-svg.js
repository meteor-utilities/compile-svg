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
  var outputPath = "/somepath/";

  var mode = {
    "css": true,
    "symbol": true
  };

  //Spriter config
  var spriter = new SVGSpriter({
      dest: outputPath,
      mode: mode
  });

  //Iterate over files and add them to spriter
  files.forEach(function (file) { 
    var fullPath = file._resourceSlot.inputResource.path;
    var fileName = fullPath.replace(/^.*[\\\/]/, '');
    var data = fs.readFileSync(fullPath, {encoding: 'utf-8'});

    spriter.add(
        fullPath, //Path to file
        fileName, //Filename
        data //file data
    );        
  });

  //Compile sprite to destination
  spriter.compile(function(err, res, data){

    //Add the resulting data
    files[0].addHtml({section: "body", data: "???"});

    files[0].addStylesheet({
      data: "???",
      path: outputPath+"svgSprite.css"
    });

    files[0].addAsset({
      data: "???",
      path: outputPath+"svgSprite.svg"
    });

  });

};