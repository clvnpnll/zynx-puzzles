// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/zynx-puzzle$1.0.0/server/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>Zynx Puzzles</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"/css/lumen.bootswatch.css\"><link rel=\"stylesheet\" href=\"/css/index.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-md transparent navbar-dark fixed-top bg-primary\"><div class=\"container\"><a class=\"navbar-brand\" href=\"/\">ZYNX</a><span class=\"navbar-text\">Puzzle Games on Mobile</span><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"><ul class=\"navbar-nav ml-md-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/games\">Games</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/comment\">Comment</a></li></ul></div></div></nav></header><main role=\"main\"><div class=\"banner home-banner3\" id=\"banner\"><div class=\"banner-header\"><h1>Top Puzzle Games on Mobile</h1><p>What are the best brain-busting puzzle games for Android?</p></div></div><div class=\"container\"><div class=\"row\">");

  var for__31 = 0;

  marko_forEach(input.games, function(game) {
    var keyscope__32 = "[" + ((for__31++) + "]");

    out.w("<div class=\"col-lg-3 col-md-4 col-sm-6\"><div class=\"card\"><img class=\"card-img-top\"" +
      marko_attr("src", "" + game.image) +
      " alt=\"Card image cap\"><div class=\"card-body\"><a" +
      marko_attr("href", "/game/" + game.id) +
      " class=\"card-link text-center\"><h5 class=\"card-title\">" +
      marko_escapeXml(game.title) +
      "</h5></a><p class=\"card-text text-truncate text-center\">" +
      marko_escapeXml(game.desc) +
      "...</p></div></div></div>");
  });

  out.w("</div></div><footer class=\"container\"><p class=\"float-right\"><a href=\"#\">Back to top</a></p><p>&copy; 2017-2018 Zynx Co. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p></footer></main><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "49");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/zynx-puzzle$1.0.0/server/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
