/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import API from '../data/API';
import { useHistory } from 'react-router-dom';
import { FloatingButton, Item } from 'react-floating-button';
import icons from '../images/icon-plus.svg';
import '../styles/Loading.css';
import '../styles/Discover.css';
import actionType from '../redux/globalActionType';
import { connect } from 'react-redux';

function Discover() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const movePage = () => {
    let path = `library`;
    history.push(path);
  };

  useEffect(() => {
    fetch(`${API.DISCOVER}?api_key=${API.API_KEY}&language=en-US`)
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
        <h2 className='__label'>Discover Movies</h2>
        <div className='list-movies'>
          {movies.map((movie) => (
            <div className='movie' key={movie.id}>
              <div className='movie__header'>
                <FloatingButton size={30} top={true} right={true}>
                  <Item imgSrc={icons} onClick={movePage} />
                </FloatingButton>
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
                  Release : {movie.release_date.split('-').reverse().join('-')}
                </p>
                <p className='movie__description'>{movie.overview}</p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleList: () => dispatch({ type: actionType.ADD_MOVIES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
