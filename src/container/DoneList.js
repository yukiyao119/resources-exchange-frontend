import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as moment from 'moment';
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'
import { Header, Segment } from 'semantic-ui-react';

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
      {`My ${exchange.exchanger.skill} requested...`}
    </li>))

  const myProvidingText = myProviding.length === 0 ? (<h4>No coming providing exchanges</h4>) : myProviding.map(exchange => (
  <li key={exchange.id}  onClick={()=> {handleClick(exchange)}}> 
    {`${exchange.exchanger.user.displayname}'s ${exchange.exchanger.skill} requested...`}
  </li>))

  return (

    <React.Fragment>
    <Segment style={{ width:"800px" }}>
      <h2 style={{ fontSize: '2em' }}>History Exchanges</h2>
      <Header as='h2' >
        Past Exchanges that I requested:
      </Header>
      <div> {myExchangesText}</div><br />
      <Header as='h2' >
        Exchanges that I provided:
      </Header>
      <div> {myProvidingText}</div><br />
    </Segment>

    {now.isAfter(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
    </React.Fragment>
  )


}

const xChgStyle = {
  border: "2px yellowgreen solid"
}

export default DoneList
