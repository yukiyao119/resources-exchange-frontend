import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as moment from 'moment';
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'

const DoneList = () => {

  const dispatch = useDispatch()
  const allExchanges = useSelector(state => state.allExchanges)
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)
  // let now = moment().format('MMMM Do YYYY, h:mm:ss a')
  let now = moment.utc();

  const pastExchanges = allExchanges.filter(exchange => now.isAfter(exchange.time))

  const myExchanges = pastExchanges.filter(exchange => (exchange.exchanger.user.username === currentUser.username))

  const myProviding = pastExchanges.filter(exchange => (exchange.exchangee.user.username === currentUser.username))
  
  const handleClick = (exchangeObj) => { 
    dispatch(selectAExchange(exchangeObj))
  }

  const myExchangesText = myExchanges.length === 0 ? (<h4>No coming exchanges yet</h4>) : myExchanges.map(exchange => (
    <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
      {`${exchange.exchanger.user.displayname}'s ${exchange.exchanger.skill} requested...`}
    </li>))

  const myProvidingText = myProviding.length === 0 ? (<h4>No coming providing exchanges</h4>) : myProviding.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`${exchange.exchanger.user.displayname}'s ${exchange.exchanger.skill} requested...`}
  </li>))

  return (

    <React.Fragment>
    <div style={xChgStyle}>
      <h2>History Exchanges</h2><br /><br />
      <div>Past Exchanges that I requested: {myExchangesText}</div><br /><br />
      <div>Exchanges that I provided: {myProvidingText}</div><br /><br />
    </div>

    {now.isAfter(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
    </React.Fragment>
  )


}

const xChgStyle = {
  border: "2px yellowgreen solid"
}

export default DoneList
