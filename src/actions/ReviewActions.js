// fetch all the reviews
export const loadReviews = reviewsArr => ({
  type: "LOAD_REVIEWS",
  payload: reviewsArr
})

export const loadAllReviews = () => dispatch => {
  // const token = localStorage.token
  // if (token) {
    fetch("http://localhost:3000/reviews", {
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
    })
  // }
}


// make a new review
export const addReview = reviewObj => ({
  type: "ADD_REVIEW",
  payload: reviewObj
})

// // post and add a new to /exchanges
export const addAReview = (reviewObj) => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reviewObj)
    }
  fetch("http://localhost:3000/reviews", object)
    .then(res => res.json())
    .then(data => {
      // debugger
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
  // debugger
  let review_id = review.id
  const object = {
    method: 'DELETE'
  }
  fetch(`http://localhost:3000/reviews/${review_id}`, object)
  .then(r => {
    // debugger
    dispatch(deleteReview(review))
  })
}