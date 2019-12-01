// fetch all the exchanges 
export const loadExchanges = exchangesArr => ({
  type: "LOAD_EXCHANGES",
  payload: exchangesArr
})

export const loadAllExchanges = () => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch("http://localhost:3000/exchanges", {
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

// select a exchanges 
export const selectExchange = exchange => ({
  type: "SELECT_EXCHANGE",
  payload: exchange
})

export const selectAExchange = (exchange) => dispatch => {
  dispatch(selectExchange(exchange))
}


export const cancelExchange = (exchangeObj) => ({
  type: 'CANCEL_EXCHANGE',
  payload: exchangeObj
})

export const cancelThisExchange = exchange => dispatch => {
  const object = {
    method: 'DELETE'
  }
  fetch(`http://localhost:3000/exchanges/${exchange.id}`, object)
  .then(r => {
    debugger
    dispatch(cancelExchange(exchange))
  })
}