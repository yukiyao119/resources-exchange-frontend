import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAReview } from '../actions/ReviewActions'
import { Form, Header, Button, TextArea } from 'semantic-ui-react'
// import { increaseDonatedHour } from '../actions/UserActions'

const ReviewForm = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)
  console.log("selected Exchange", selectedExchange)
  // const reviewedUser = selectedExchange.exchangee.user

  const [reviewForm, setReviewForm] = useState({
    user_id: currentUser.id,
    exchange_id: selectedExchange.id,
    content: '',
    author: selectedExchange.exchanger.user.username
  })

  const { content, author } = reviewForm

  const handleChange = (e) => {
    setReviewForm({...reviewForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addAReview(reviewForm))
    // dispatch(increaseDonatedHour(reviewedUser))
  }


  return (
  <React.Fragment>
    <div style={{ "marginTop": "25px", 'width': "50%"}}>
      <Form onSubmit={handleSubmit}>
      <Header as='h3' color='purple'>Share your experience: </Header>
        <Form.Field control={TextArea}  name="content" value={content} onChange={handleChange} placeholder="review here.." />

        <Form.Input type="text" name="author" value={author} onChange={handleChange} placeholder="Your name" />

        <Button>submit</Button><br /><br />
      </Form>
    </div>
    
  </React.Fragment>
  )
}



export default ReviewForm