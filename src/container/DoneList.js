import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as moment from 'moment';
import { selectAExchange } from '../actions/ExchangeActions'
import ExchangeCard from '../component/ExchangeCard'
import { Header, Segment, Label, List, Icon, Modal } from 'semantic-ui-react';

const DoneList = () => {

  const dispatch = useDispatch()
  const allExchanges = useSelector(state => state.allExchanges)
  const currentUser = useSelector(state => state.currentUser)
  const selectedExchange = useSelector(state => state.selectedExchange)
  let now = moment.utc();

  const pastExchanges = allExchanges.filter(exchange => now.isAfter(exchange.time))

  const myExchanges = pastExchanges.filter(exchange => (exchange.exchanger.user.username === currentUser.username))

  const myProviding = pastExchanges.filter(exchange => (exchange.exchangee.user.username === currentUser.username))
  
  const handleClick = (exchangeObj) => { 
    dispatch(selectAExchange(exchangeObj))
  }

  const myExchangesText = myExchanges.length === 0 ? (<p>No coming exchanges yet</p>) : myExchanges.map(exchange => (
  <List key={exchange.id}>
    <Modal trigger={<List.Item id="reversedColor" onClick={()=> {handleClick(exchange)}}><Icon name='calendar check outline'/>
    {`My ${exchange.exchanger.skill} VS ${exchange.exchangee.user.username}'s ${exchange.exchangee.skill}`}</List.Item>} closeIcon>
      <Header as='h3' icon='bell' color='purple' content='Your exchange!' />
      <Modal.Content>
        {now.isAfter(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
      </Modal.Content>
    </Modal>
  </List>))

  const myProvidingText = myProviding.length === 0 ? (<p>No coming providing exchanges</p>) : myProviding.map(exchange => (
  <List key={exchange.id}>
    <Modal trigger={<List.Item id="reversedColor" onClick={()=> {handleClick(exchange)}}><Icon name='calendar check outline'/>
    {`${exchange.exchanger.user.username}'s ${exchange.exchanger.skill} VS ${exchange.exchangee.user.username}'s ${exchange.exchangee.skill}`}</List.Item>} closeIcon>
      <Header as='h3' icon='bell' color='purple' content='Your exchange!' />
      <Modal.Content>
        {now.isAfter(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null}
      </Modal.Content>
    </Modal>
  </List>))

  return (

    <React.Fragment>
    <Segment style={{ "margin": "5px"}} raised>
      <Label color='purple' ribbon size='large'>History</Label>
      <Header as='h2' color='purple' style={{ fontSize: '2em' }}>Your Exchanges</Header>
      <Header as='h3' >
        <Label size='small' tag>Requested</Label>
      </Header>
      <div> {myExchangesText}</div><br />
      <Header as='h3' >
        <Label size='small' tag>Received</Label>
      </Header>
      <div> {myProvidingText}</div><br />
    </Segment>

    {/* {now.isAfter(selectedExchange.time) && selectedExchange.id ? <ExchangeCard /> : null} */}
    </React.Fragment>
  )


}


export default DoneList
