import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAReview } from '../actions/ReviewActions'
import { Form, Grid } from 'semantic-ui-react'


const ReviewForm = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)

  const [reviewForm, setReviewForm] = useState({
    user_id: currentUser.id,
    exchange_id: selectedExchange.id,
    content: '',
    author: ''
  })

  const { content, author } = reviewForm

  const handleChange = (e) => {
    setReviewForm({...reviewForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addAReview(reviewForm))
  }

  return (
  <React.Fragment>
    <div>
      <form onSubmit={handleSubmit}>
      Share your experience: 
        <input type="text" name="content" value={content} onChange={handleChange} placeholder="review here.." />

        <input type="text" name="author" value={author} onChange={handleChange} placeholder="Your name" />

        <input type="submit" /><br /><br />
      </form>
    </div>
    
  </React.Fragment>
  )
}



export default ReviewForm