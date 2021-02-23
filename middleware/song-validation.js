const repoContext = require("../repository/repository-wrapper");

exports.validateSong = (req, res, next) => {
  const data = req.body;
  if (
    isValidProperty(data, "id", "number") &&
    isValidProperty(data, "title", "string") &&
    isValidProperty(data, "album", "string") &&
    isValidProperty(data, "artist", "string") &&
    isValidProperty(data, "genre", "string") &&
    isValidProperty(data, "releaseDate", "string") &&
    songExists(data.id)
  ) {
    return next();
  } else {
    return res
      .status(400)
      .send({ error: "Missing required properties or song already exits." });
  }
};

function isValidProperty(data, property, type) {
  return data.hasOwnProperty(property) && typeof data[property] === type;
}

function songExists(id) {
  const song = repoContext.songs.findSongById(id);
  return song ? false : true;
}
