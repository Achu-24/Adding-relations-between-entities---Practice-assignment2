import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (rate) => {
    setRating(rate);
  };

  const handleHover = (rate) => {
    setHoveredRating(rate);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating after submission
    }
  };

  return (
    <div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((rate) => (
          <span
            key={rate}
            className={`star ${rate <= (hoveredRating || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(rate)}
            onMouseEnter={() => handleHover(rate)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
