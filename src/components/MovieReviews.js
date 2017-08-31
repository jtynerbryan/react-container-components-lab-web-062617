import React from 'react'

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map((review, index) => <div className='review' key={index}><h3>{review.title}</h3></div>)}
  </div>
};


MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews

