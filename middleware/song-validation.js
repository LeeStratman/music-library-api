const repoContext = require("../repository/repository-wrapper");

exports.validateSong = (req, res, next) => {
  const data = req.body;
  if (
    isValidProperty(data, "title", "string") &&
    isValidProperty(data, "album", "string") &&
    isValidProperty(data, "artist", "string") &&
    isValidProperty(data, "genre", "string") &&
    isValidProperty(data, "releaseDate", "string")
  ) {
    return next();
  } else {
    return res.status(400).send({ error: "Missing required properties." });
  }
};

function isValidProperty(data, property, type) {
  return data.hasOwnProperty(property) && typeof data[property] === type;
}
