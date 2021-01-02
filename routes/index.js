"use strict";

module.exports = async function routes(fastify, opts, done) {
  fastify.register(require("./followers"));
};
