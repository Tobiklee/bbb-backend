"use strict";

module.exports = async function routes(fastify, opts, done) {
  fastify.post("/fight", async (request, reply) => {
    console.log(request);
  });
};
