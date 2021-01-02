"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // MongoDB plugin
  // https://github.com/fastify/fastify-mongodb
  fastify.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    
    url: 'mongodb://mongo/mydb'
  })

  // Enable CORS for the application
  // https://github.com/fastify/fastify-cors
  fastify.register(require("fastify-cors"));

  // compress responses
  // https://github.com/fastify/fastify-compress
  fastify.register(require("fastify-compress"));

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
