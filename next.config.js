const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  // TODO: remove this in the integration with the cms
  images: {
    domains: ["sigdeletras.com"]
  }
};
