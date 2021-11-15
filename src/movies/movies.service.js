const knex = require("../db/connection");

const list = () => {
  return knex("movies").select("*");
};

const read = movie_id => {
  return knex("movies").select("*").where({ movie_id }).first();
};

module.exports = {
  list,
  read,
};
