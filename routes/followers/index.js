"use strict";

const followers = require("./followers.js");

module.exports = async function routes(fastify, opts, done) {
  fastify.get("/followers", async (request, reply) => {
    return followers;
  });
};
