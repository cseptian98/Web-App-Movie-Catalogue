/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import '../styles/Loading.css';
import '../styles/Discover.css';
import API from '../data/API';
import { connect } from 'react-redux';

function Library() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API.UPCOMING}?api_key=${API.API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className='content'>
        <h2 className='__label'>Upcoming Movies</h2>
        <div className='list-movies'>
          {movies.map((movie) => (
            <div className='movie' key={movie.id}>
              <div className='movie__header'>
                <img
                  className='movie__thumbnail'
                  src={`${API.BASE_IMG_URL}${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <div className='movie__rating'>
                  <p>
                    ⭐️
                    <span className='movie__rating__score'>
                      {movie.vote_average}
                    </span>
                  </p>
                </div>
              </div>
              <div className='movie__content'>
                <p className='movie__title'>{movie.title}</p>
                <p className='movie__release'>
                  Release Date : {movie.release_date}
                </p>
                <p className='movie__description'>{movie.overview}</p>
                <p className='button'>
                  <a href='/'>
                    <span>See Detail</span>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list_movies,
  };
};

export default connect(mapStateToProps)(Library);
