const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const movieExists = async (req, res, next) => {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
};

const read = async (req, res, next) => {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.read(movie) });
};

const list = async (req, res, next) => {
  const data = await moviesService.list();
  res.json({ data });
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
};
