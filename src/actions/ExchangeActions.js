// const deployment = 'http://localhost:3000/'
const deployment = 'https://resources-exchange-backend.herokuapp.com/'


// fetch all the exchanges 
export const loadExchanges = exchangesArr => ({
  type: "LOAD_EXCHANGES",
  payload: exchangesArr
})

export const loadAllExchanges = () => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch(`${deployment}exchanges`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch(loadExchanges(data))
    })
  }
}


// select a exchange
export const selectExchange = exchange => ({
  type: "SELECT_EXCHANGE",
  payload: exchange
})

export const selectAExchange = (exchange) => dispatch => {
  dispatch(selectExchange(exchange))
}

// delete / cancel an exchange
export const cancelExchange = (exchangeObj) => ({
  type: 'CANCEL_EXCHANGE',
  payload: exchangeObj
})

export const cancelThisExchange = exchange => dispatch => {
  const object = {
    method: 'DELETE'
  }
  fetch(`${deployment}exchanges/${exchange.id}`, object)
  .then(r => {
    // debugger
    dispatch(cancelExchange(exchange))
  })
}

// make a new exchange, add a exchange to all Xchanges
export const addExchange = exchangeObj => ({
  type: "ADD_EXCHANGE",
  payload: exchangeObj
})


// post and add a new to /exchanges
export const addAnExchange = (exchangeObj) => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(exchangeObj)
    }
  fetch(`${deployment}exchanges`, object)
    .then(res => res.json())
    .then(data => {
      // debugger
      // console.log("backend created new exchange", data)
      dispatch(addExchange(data))
    })
}