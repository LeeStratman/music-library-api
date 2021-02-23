const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
