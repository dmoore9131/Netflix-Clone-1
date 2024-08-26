import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  // Replace 'YOUR_VALID_API_KEY' with your actual API key
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer `
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`, options);
        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`Network response was not ok: ${errorDetails}`);
        }
        const data = await response.json();
        setApiData(data.results || []);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((movie) => (
            <Link to={`/player/${movie.id}`} className="card" key={movie.id}>
              <img 
                src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : 'default-image-url'} 
                alt={movie.title || 'Movie Poster'} 
              />
              <p>{movie.title || 'Untitled'}</p>
            </Link>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default TitleCards;
