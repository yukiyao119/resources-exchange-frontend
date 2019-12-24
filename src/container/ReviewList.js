import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteThisReview } from '../actions/ReviewActions'
import { Icon, Header, List } from 'semantic-ui-react'


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
        <List celled>
          <List.Item>
          <List.Content>
            <List.Header as='h5'>{review.author}</List.Header>
              {review.content}
              {selectedExchange.exchanger.user.username === currentUser.username ? <Icon onClick={()=>handleDelete(review)} name="remove"></Icon> : null}
          </List.Content>
          </List.Item>
        </List>
      </div>
    )
  })

  return (
    <React.Fragment>
    <div style={{ "marginTop": "25px", "marginBottom": "25px"}}>
      <Header as='h3' color='purple'><Icon name='comment'/>Review the experience</Header>
      <p>You can review the past event. Also, only the user who requested the exchange can write a review.</p>
      {reviewItems}
    </div>
    </React.Fragment>
  )
}

export default ReviewList