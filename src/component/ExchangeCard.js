import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cancelThisExchange } from '../actions/ExchangeActions'
import * as moment from 'moment'
import ReviewForm from './ReviewForm'
import ReviewList from '../container/ReviewList'
import { Segment, Button } from 'semantic-ui-react'


const ExchangeCard = () => {

  const dispatch = useDispatch()
  const selectedExchange = useSelector(state => state.selectedExchange)
  console.log("selected Exchange", selectedExchange)
  const { exchanger, exchangee, time, location } = selectedExchange
  const currentUser = useSelector(state => state.currentUser)
  const formattedTime = moment(time).format('MMMM Do YYYY, h:mm:ss a')

  let now = moment.utc()

  const handleCancel = (exchangeObj) => {
    console.log("cancelling/deleting this exchange")
    dispatch(cancelThisExchange(exchangeObj))
  }
  
  return (
    <React.Fragment>
    
    <Segment style={{ margin: '0' }}>
      <div style={{'width': "100%"}}>
        <strong>Description: </strong>   {`${exchanger.user.username}'s ${exchanger.skill} exchanges ${exchangee.user.displayname}'s ${exchangee.skill}!!` }<br />
        <strong>Time: </strong>   {formattedTime}<br />
        <strong>Location: </strong>   {location}<br /><br />
        
        <div ><strong>Rule: </strong>As long as your time-slot is open, the xchange is considered accepted automatically. Both users will have a two-hours session. One hour for each skill exchange. If you can not make the Xchange, please cancel before the xchange time.</div>
        <ReviewList />

        {now.isAfter(selectedExchange.time) && selectedExchange.exchanger.user.username === currentUser.username ? <ReviewForm />:null}

        {now.isAfter(selectedExchange.time) ? null :
        <Button basic onClick={()=>{handleCancel(selectedExchange)}}>Cancel this Xchange</Button>}

      </div>
    </Segment>
    </React.Fragment>
  )
}


export default ExchangeCard
