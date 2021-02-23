const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/music", (req, res) => {
  const music = repoContext.songs.findAllSongs();
  return res.send(music);
});

app.get("/api/music/:id", (req, res) => {
  const id = req.params.id;
  const song = repoContext.songs.findSongById(id);
  return res.send(song);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
