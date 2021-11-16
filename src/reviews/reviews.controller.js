const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const reviewExists = async (req, res, next) => {
  const review = await reviewsService.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: "Review cannot be found." });
};

const destroy = async (req, res, next) => {
  await reviewsService.delete(res.locals.review.review_id);
  res.sendStatus(204);
};

module.exports = {
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
