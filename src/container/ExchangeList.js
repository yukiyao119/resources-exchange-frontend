import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'
import * as moment from 'moment';
import { Header, Segment, Label, List, Icon, Modal } from "semantic-ui-react";

const ExchangeList = () => {

  const dispatch = useDispatch()
  const allExchanges = useSelector(state => state.allExchanges)
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)

  let now = moment.utc();

  const comingExchanges = allExchanges.filter(exchange => now.isBefore(exchange.time))

  const myExchanges = comingExchanges.filter(exchange => (exchange.exchanger.user.username === currentUser.username))

  const myProviding = comingExchanges.filter(exchange => (exchange.exchangee.user.username === currentUser.username))

  const handleClick = (exchangeObj) => {
    dispatch(selectAExchange(exchangeObj))
  }
  
  const myExchangesText = myExchanges.length === 0 ? (<p>No coming exchanges yet</p>) : myExchanges.map(exchange => (
    <List key={exchange.id}><Modal trigger={<List.Item  onClick={()=> {handleClick(exchange)}}><Icon name='calendar check'/>
    {`My ${exchange.exchanger.skill} VS ${exchange.exchangee.user.username}'s ${exchange.exchangee.skill}`}</List.Item>} closeIcon>
      <Header as='h3' icon='bell' color='purple' content='Your exchange!' />
      <Modal.Content>
      {now.isBefore(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
      </Modal.Content>
    </Modal></List>
  ))

  const myProvidingText = myProviding.length === 0 ? (<p>No coming providing exchanges</p>) : myProviding.map(exchange => (
  <List key={exchange.id}>
    <Modal trigger={<List.Item  onClick={()=> {handleClick(exchange)}}><Icon name='calendar check'/>
  {`${exchange.exchanger.user.username}'s ${exchange.exchanger.skill} VS ${exchange.exchangee.user.username}'s ${exchange.exchangee.skill}`}</List.Item>} closeIcon>
      <Header as='h3' icon='bell' color='purple' content='Your exchange!' />
      <Modal.Content>
        {now.isBefore(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
      </Modal.Content>
    </Modal>
  </List>))


  return (
    <React.Fragment>

      <Segment style={{ "margin": "5px" }} raised>
          <Label color='purple' ribbon size='large'>Coming</Label>
        <Header as='h2' color='purple' style={{ fontSize: '2em' }}>
          Your Exchanges
        </Header>
        <Header as='h3' >
          <Label size='small' tag>Requested</Label>
        </Header>
          <div>{myExchangesText}</div><br />
        <Header as='h3' >
          <Label size='small' tag>Received</Label>
        </Header>
          <div>{myProvidingText}</div><br />
      </Segment>

      {/* {now.isBefore(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null} */}
      
    </React.Fragment>
  )

}


export default ExchangeList