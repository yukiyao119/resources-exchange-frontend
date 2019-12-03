import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteThisReview } from '../actions/ReviewActions'


 const ReviewList = () => {

  const dispatch = useDispatch()
  const allReviews = useSelector(state => state.allReviews)
  const selectedExchange = useSelector(state => state.selectedExchange)
  const currentUser = useSelector(state => state.currentUser)

  const filteredReviews = allReviews.filter(review => review.exchange_id === selectedExchange.id)


  const handleDelete = reviewObj => {
    dispatch(deleteThisReview(reviewObj))
  }

  const reviewItems = filteredReviews.map(review => {
    return (
      <div key={review.id}>
        <li> {review.content} --{review.author}</li>
        {selectedExchange.exchanger.user.username === currentUser.username ? 
        <button onClick={()=>handleDelete(review)}>Delete</button> : null}
      </div>
    )
  })

  return (

    <React.Fragment>
    <div>
      <h3>Reviews</h3>
      {reviewItems}
    </div>
    </React.Fragment>
  )
}

export default ReviewList