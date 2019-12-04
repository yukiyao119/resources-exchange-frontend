import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'
import * as moment from 'moment';

const ExchangeList = () => {

  const dispatch = useDispatch()
  const allExchanges = useSelector(state => state.allExchanges)
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)
  // console.log("selected exchange", selectedExchange)

  let now = moment.utc();

  const comingExchanges = allExchanges.filter(exchange => now.isBefore(exchange.time))

  const myExchanges = comingExchanges.filter(exchange => (exchange.exchanger.user.username === currentUser.username))

  const myProviding = comingExchanges.filter(exchange => (exchange.exchangee.user.username === currentUser.username))

  const handleClick = (exchangeObj) => {
    dispatch(selectAExchange(exchangeObj))
  }
  
  const myExchangesText = myExchanges.length === 0 ? (<h4>No coming exchanges yet</h4>) : myExchanges.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`${exchange.exchanger.user.username}'s ${exchange.exchanger.skill} requested...`}
  </li>))

  const myProvidingText = myProviding.length === 0 ? (<h4>No coming providing exchanges</h4>) : myProviding.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`${exchange.exchanger.user.username}'s ${exchange.exchanger.skill} requested...`}
  </li>))

  return (
    <React.Fragment>
      <div style={xChgStyle}>
        <h2>Coming Exchanges List</h2><br /><br />
        <div>Exchanges that I requested: {myExchangesText}</div><br /><br />
        <div>Exchanges that I will provide: {myProvidingText}</div><br /><br />
      </div>
      {now.isBefore(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
    </React.Fragment>
  )

}

const xChgStyle = {
  border: "2px yellowgreen solid"
}

export default ExchangeList