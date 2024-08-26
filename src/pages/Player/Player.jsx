import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css'; // Ensure this CSS file is correctly linked
import backArrowIcon from '../../assets/back_arrow_icon.png'; // Adjust the path as needed

const Player = () => {
  const { id } = useParams(); // Retrieve movie ID from URL params
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=`);
        if (!response.ok) throw new Error('HTTP error! Status: ' + response.status);
        const data = await response.json();
        const video = data.results[0];
        if (video) {
          setVideoUrl(`https://www.youtube.com/embed/${video.key}`); // Assuming YouTube videos
        } else {
          setError('No video found');
        }
      } catch (err) {
        setError('Error fetching video: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="player">
      <img
        src={backArrowIcon}
        alt="Back"
        className="back-button"
        onClick={handleGoBack}
      />
      {videoUrl && (
        <iframe
          title="Video Player"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        {/* The button has been removed from here as requested */}
      </div>
    </div>
  );
};

export default Player;
