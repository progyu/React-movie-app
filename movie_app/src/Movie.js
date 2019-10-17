import React from 'react';
import PropTypes from "prop-types";
import './Movie.css';

function Movie ({title, poster}) {
  return (
    <>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="포스터 이미지"></img>
  ) 
}

Movie.prototype = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

MoviePoster.prototype = {
  title: PropTypes.string.isRequired
}

export default Movie;