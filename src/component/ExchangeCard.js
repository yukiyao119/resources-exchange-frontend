import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cancelThisExchange } from '../actions/ExchangeActions'
import * as moment from 'moment'
import ReviewForm from './ReviewForm'
import ReviewList from '../container/ReviewList'
import { Segment } from 'semantic-ui-react'


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
      {/* style={{ padding: '8em 0em' }} */}
    <Segment style={{ margin: '0' }}>
      {/* <Container text> */}
      <div>
        <h3>Congrats! Your Xchange!</h3>
        <p><strong>Rule: </strong>As long as your time-slot is open, the xchange is considered accepted automatically. Both users will have a two-hours session. One hour for each skill exchange. If you can not make the Xchange, please cancel before the xchange time.</p>

        <strong>Description: </strong>{`${exchanger.user.username}'s ${exchanger.skill} exchanges ${exchangee.user.displayname}'s ${exchangee.skill}!!` }<br />

        <strong>Time: </strong> {formattedTime}<br />

        <strong>Location: </strong>{location}<br /><br />

        <strong>
        Requester Info:</strong><br />
        Name: {exchanger.user.username}<br />
        Providing skill: {exchanger.skill}<br />
        Donated hour: {exchanger.user.donated_hour}<br /><br />

        <strong>Provider Info:</strong><br />
        Name: {exchangee.user.username}<br />
        Providing skill: {exchangee.skill}<br />
        Donated hour: {exchangee.user.donated_hour}<br /><br />
        
        <ReviewList />

        {now.isAfter(selectedExchange.time) && selectedExchange.exchanger.user.username === currentUser.username ? (<div> <ReviewForm /></div> )
        :
        null}

        {now.isAfter(selectedExchange.time) ? null :
        <button onClick={()=>{handleCancel(selectedExchange)}}>Cancel this Xchange</button>}

      </div>
      {/* </Container> */}
    </Segment>
    </React.Fragment>
  )
}


export default ExchangeCard
