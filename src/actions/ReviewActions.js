import { trackPromise } from 'react-promise-tracker'

// const deployment = 'http://localhost:3000/'
const deployment = 'https://resources-exchange-backend.herokuapp.com/'


// fetch all the reviews
export const loadReviews = reviewsArr => ({
  type: "LOAD_REVIEWS",
  payload: reviewsArr
})

export const loadAllReviews = () => dispatch => {
  // const token = localStorage.token
  // if (token) {
    trackPromise(
    fetch(`${deployment}reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // debugger
      dispatch(loadReviews(data))
    }))
  // }
}


// make a new review
export const addReview = reviewObj => ({
  type: "ADD_REVIEW",
  payload: reviewObj
})

// post and add a new to /exchanges
export const addAReview = (reviewObj) => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reviewObj)
    }
  fetch(`${deployment}reviews`, object)
    .then(res => res.json())
    .then(data => {
      dispatch(addReview(data))
    })
}


// select a review
export const selectReview = review => ({
  type: "SELECT_REVIEW",
  payload: review
})

export const selectAReview = (review) => dispatch => {
  dispatch(selectReview(review))
}


// delete / cancel a review
export const deleteReview = (reviewObj) => ({
  type: 'DELETE_REVIEW',
  payload: reviewObj
})

export const deleteThisReview = review => dispatch => {
  let review_id = review.id
  const object = {
    method: 'DELETE'
  }
  fetch(`${deployment}reviews/${review_id}`, object)
  .then(r => {
    dispatch(deleteReview(review))
  })
}