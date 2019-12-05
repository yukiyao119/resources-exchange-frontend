import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'
import * as moment from 'moment';
import { Header, Segment } from "semantic-ui-react";

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
  
  const myExchangesText = myExchanges.length === 0 ? (<p>No coming exchanges yet</p>) : myExchanges.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`My ${exchange.exchanger.skill} requested...`}
  </li>))

  const myProvidingText = myProviding.length === 0 ? (<p>No coming providing exchanges</p>) : myProviding.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`${exchange.exchanger.user.username}'s ${exchange.exchanger.skill} requested...`}
  </li>))

  return (
    <React.Fragment>
      <Segment style={{ width:"800px" }}>
        <Header as='h2' color='purple' style={{ fontSize: '2em' }}>
        Coming Exchanges List
        </Header>
        <Header as='h3' >
          Exchanges that I requested:
        </Header>
          <div>{myExchangesText}</div><br />
        <Header as='h3' >
          Exchanges that I will provide:
        </Header>
          <div>{myProvidingText}</div><br />
      </Segment>

      {now.isBefore(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
      
    </React.Fragment>
  )

}

const segmentStyle = {
  display: "flex",
  justifyContent: "center"
}

const xChgStyle = {
  border: "2px yellowgreen solid"
}

export default ExchangeList