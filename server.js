/* eslint-disable no-console */
const { resolve } = require("path");
const express = require("express");
const morgan = require("morgan");
const openBrowser = require("react-dev-utils/openBrowser");

const app = express();
const currentDirectory = process.cwd();
const { HOST, PORT } = process.env;

// request logging framework
app.use(morgan("tiny"));

// express serve up production assets from dist
app.use(express.static("dist"));

// express will serve up the front-end index.html file if it doesn't recognize the route
app.get("*", (req, res) =>
  res.sendFile(resolve(`${currentDirectory}/dist/index.html`)),
);

// create server on specified PORT
app.listen(PORT, err => {
  if (!err) {
    const url = `${HOST}${PORT}`;
    console.log(`\nYour application is running on \x1b[1m${url}\x1b[0m\n`);
    openBrowser(url);
  } else {
    console.err(`\nUnable to start server: ${err}`);
  }
});
/* eslint-enable no-console */
