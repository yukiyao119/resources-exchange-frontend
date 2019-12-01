import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cancelThisExchange } from '../actions/ExchangeActions'

const ExchangeCard = () => {

  const dispatch = useDispatch()
  const selectedExchange = useSelector(state => state.selectedExchange)

  const { exchanger, exchangee, time, location } = selectedExchange

  const handleCancel = (exchangeObj) => {
    console.log("cancelling/deleting this exchange")
    // delete from DB and off from DOM
    dispatch(cancelThisExchange(exchangeObj))
  }
  
  return (
    <React.Fragment>
      <div style={xChgStyle}>
        <h3>Congrats! You are going to have an Xchange!</h3>
        <p>Details: As long as your time-slot is open, the xchange is considered accepted automatically. Both users will have a two-hours session. One hour for each skill exchange.</p><br />
        <p>Rule: If you can not make the Xchange, please cancel before the xchange time.</p><br />
        Description: 
        {`${exchanger.user.displayname}'s ${exchanger.skill} exchanges ${exchangee.user.displayname}'s ${exchangee.skill}!!` }<br />
        Time: {time}<br /><br />
        Location: {location}<br /><br />
        Requester Info:<br />
        Name: {exchanger.user.displayname}<br />
        Providing skill: {exchanger.skill}<br />
        Donated hour: {exchanger.user.donated_hour}<br /><br />
        Provider Info:<br />
        Name: {exchangee.user.displayname}<br />
        Providing skill: {exchangee.skill}<br />
        Donated hour: {exchangee.user.donated_hour}<br /><br />
        <button onClick={()=>{handleCancel(selectedExchange)}}>Cancel this Xchange</button>
      </div>
    </React.Fragment>
  )
}

const xChgStyle = {
  border: "1px yellow solid"
}

export default ExchangeCard
