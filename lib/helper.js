Template.registerHelper('getSVG', function (name) {
  return '<svg class="icon"><use xlink:href="#'+name+'" /></svg>';
});