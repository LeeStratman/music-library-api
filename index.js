const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const { validateSong } = require("./middleware/song-validation");
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

app.post("/api/music", [validateSong], (req, res) => {
  const song = req.body;
  const createSong = repoContext.songs.createSong(song);
  return res.send(createSong);
});

app.put("/api/music/:id", [validateSong], (req, res) => {
  const id = req.params.id;
  const songPropertiesToUpdate = req.body;
  const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
  return res.send(updatedSong);
});

app.delete("/api/music/:id", (req, res) => {
  const id = req.params.id;
  const updatedDataSet = repoContext.songs.deleteSong(id);
  return res.send(updatedDataSet);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
