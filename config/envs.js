const { ANALYZE, NODE_ENV, PORT } = process.env;

const inDevelopment = NODE_ENV === "development";

module.exports = {
  ANALYZE /* analyze build output */,
  currentDirectory: process.cwd() /* current working directory */,
  inDevelopment /* in development environment */,
  localIdentName:
    "[local]___[hash:base64:5]" /* how class names will be defined in the DOM */,
  NODE_ENV /* current environment */,
  PORT /* application's current port */,
};
