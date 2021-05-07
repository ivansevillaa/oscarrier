const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  // TODO: remove this in the creation of the post
  images: {
    domains: ["sigdeletras.com", "res.cloudinary.com"]
  }
};
