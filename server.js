const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "ico", "jpg", "jpeg", "png", "svg"],
  index: ["index.html"],
  maxAge: "1m",
  redirect: false,
};
app.use(cors({
  origin: 'https://carmine-jellyfish-tie.cyclic.app/used-product'
}));

app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`);
});