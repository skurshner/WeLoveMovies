const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res, next) => {
  const data = await moviesService.list();
  res.json({ data });
};

module.exports = {
  list: asyncErrorBoundary(list),
};
