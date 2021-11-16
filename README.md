# Thinkful Capstone: WeLoveMovies

Deployed at: heroku.com

## Project Overview

Built database and back-end application for an API which returns information about movies, theaters, reviews and critics.
Built using:

- PostgreSQL
- Node.js
- Express.js
- Knex.js

## Routes

The following routes and methods are available:

### Movies

#### `/movies`

- `GET` returns all columns for each movie in the database

#### `/movies?is_showing=true`

- `GET` returns all columns for each movie in database that is currently showing

#### `/movies/:movieId`

- `GET` returns all columns for requested movie

#### `/movies/:movieId/theaters`

- `GET` returns all columns for theater where the requested movie is playing

#### `/movies/:movieId/reviews`

- `GET` returns all columns, including detailed critic data, for each review of the requested movie

### Reviews

#### `/reviews/:reviewId`

- `PUT` updates data for requested review and returns all columns for that review including updated and detailed critic data

* `DELETE` deletes requested review from database

### Theaters

#### `/theaters`

- `GET` returns all columns for each theater in the database with detailed movie data for each movie showing at that theater
