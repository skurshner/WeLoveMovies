const { groupBy } = require("../db/connection");
const knex = require("../db/connection");

const list = () => {
  return knex("movies").select("*");
};

const listMoviesCurrentlyShowing = () => {
  return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .distinct("m.*")
    .where({ "mt.is_showing": true });
};

const read = movie_id => {
  return knex("movies").select("*").where({ movie_id }).first();
};

module.exports = {
  list,
  listMoviesCurrentlyShowing,
  read,
};
