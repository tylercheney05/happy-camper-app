import React from 'react';
import Review from './Review'

const ReviewList = ({reviews}) => (
  <div>
    {reviews.map (r =>
      <Review
        key={r.id}
        {...r}
      />
      )}
  </div>
)

export default ReviewList