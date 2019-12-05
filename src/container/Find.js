import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import NewExchangeForm from '../component/NewExchangeForm'
import UserList from '../container/UserList'
import mapStyles from "../mapStyles"
import { selectAUser } from '../actions/UserActions'
import { Grid, Container, Segment } from "semantic-ui-react"

function Map() {

  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.allUsers)
  const selectedUser = useSelector(state => state.selectedUser)
  const currentUser = useSelector(state => state.currentUser)
  console.log("selectedUser", selectedUser, "currentUser", currentUser)

  const [localSelectedUser, setLocalSelectedUser] = useState(null)
  const [newXStatus, setnewXStatus] = useState({
    newX: false
  })

  

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setLocalSelectedUser(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  const handleCloseWindow = () => {
    setLocalSelectedUser(null)
    setnewXStatus({
      ...newXStatus,
      newX: false
    })
  }
  const handleShowForm = () => {
    setLocalSelectedUser(null)
    setnewXStatus({
      ...newXStatus,
      newX: !newXStatus.newX
    })
  }

  const handleClickUser = (user) =>{
    setLocalSelectedUser(user)
    dispatch(selectAUser(user))
  }


  return (
  <>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {allUsers.map(user => (
        <Marker
          key={user.id}
          position={{
            lat:  parseFloat(user.lat),
            lng:  parseFloat(user.lng)
          }}
          onClick={ () => {handleClickUser(user)} }
          icon={{
            url: `/goldenDoodle.jpg`,
            scaledSize: new window.google.maps.Size(30, 23)
          }}
        />
      ))}

      {localSelectedUser && (
        <InfoWindow
          onCloseClick={handleCloseWindow}
          position={{
            lat: parseFloat(localSelectedUser.lat),
            lng: parseFloat(localSelectedUser.lng)
          }}
        >
          <div style={{ width: "20vw", height: "40vh" }}>
            <h4>{localSelectedUser.displayname}</h4>
            <p>Bio: {localSelectedUser.bio}</p>
            <p>Donated_hour: {localSelectedUser.donated_hour}</p>
            <p>Location: {localSelectedUser.location}</p>
            <p>Open time: {localSelectedUser.time_slot}</p>
            <li><strong>Skills: </strong>{localSelectedUser.user_skills.map(user_skill => { return <p>{user_skill.skill.name}</p>} )}</li>
            <br />
            <button onClick={()=> handleShowForm(localSelectedUser)}>Request an Xchange!</button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>   


    { newXStatus.newX === true ? 
    <Segment>
      <NewExchangeForm selectedUser={selectedUser}/>
    </Segment>

    : null}
    
  </>
  )
}
const profileStyle = {
  border: "1px blue solid"
}

const MapWrapped = withScriptjs(withGoogleMap(Map))


export default function Find() {

  return (
    <>
      <div className="ten wide column" style={{ width: "100vw", height: "100vh", border: "1px blue solid" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

    </>
  )

}