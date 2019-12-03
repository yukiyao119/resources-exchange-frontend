import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cancelThisExchange } from '../actions/ExchangeActions'
import * as moment from 'moment'
import ReviewForm from './ReviewForm'
import ReviewList from '../container/ReviewList'

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
      <div style={xChgStyle}>
        <h3>Congrats! Your Xchange!</h3>
        <p>Details: As long as your time-slot is open, the xchange is considered accepted automatically. Both users will have a two-hours session. One hour for each skill exchange.</p><br />

        <p>Rule: If you can not make the Xchange, please cancel before the xchange time.</p><br />

        Description: {`${exchanger.user.displayname}'s ${exchanger.skill} exchanges ${exchangee.user.displayname}'s ${exchangee.skill}!!` }<br />

        Time: {formattedTime}<br /><br />

        Location: {location}<br /><br />

        Requester Info:<br />z
        Name: {exchanger.user.displayname}<br />
        Providing skill: {exchanger.skill}<br />
        Donated hour: {exchanger.user.donated_hour}<br /><br />

        Provider Info:<br />
        Name: {exchangee.user.displayname}<br />
        Providing skill: {exchangee.skill}<br />
        Donated hour: {exchangee.user.donated_hour}<br /><br />
        
        <ReviewList />

        {now.isAfter(selectedExchange.time) && selectedExchange.exchanger.user.username === currentUser.username ? (<div><p>Only requester can write review and delete your own review.</p> <ReviewForm /></div> )
        :
        <button onClick={()=>{handleCancel(selectedExchange)}}>Cancel this Xchange</button>}

      </div>
    </React.Fragment>
  )
}

const xChgStyle = {
  border: "2px plum solid"
}

export default ExchangeCard
