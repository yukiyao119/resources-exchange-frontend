import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'

const ExchangeList = () => {

  const dispatch = useDispatch()
  const allExchanges = useSelector(state => state.allExchanges)
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)

  const myExchanges = allExchanges.filter(exchange => (exchange.exchanger.user.username === currentUser.username))
  console.log("selected exchange", selectedExchange);
  

  const handleClick = (exchangeObj) => {
    // set state, make cur xchg to this one. 
    dispatch(selectAExchange(exchangeObj))
  }
  
  const text = myExchanges.empty ? (<h4>No exchanges yet</h4>) : myExchanges.map(exchange => (
  <li 
    key={exchange.id}
    onClick={()=> {handleClick(exchange)}}
  > Exchange No.{exchange.id}:  {`${exchange.exchanger.user.displayname}'s ${exchange.exchanger.skill}`}</li>))

  return (
    <React.Fragment>
      <div style={xChgStyle}>
        <h2>My Exchange List</h2>
        I as a exchanger, requester, receiver ect...<br />
        <div>{text}</div>
        <br />
      </div>
      {selectedExchange.id ? <ExchangeCard /> : null}
    </React.Fragment>
  )

}

const xChgStyle = {
  border: "3px yellow solid"
}

export default ExchangeList