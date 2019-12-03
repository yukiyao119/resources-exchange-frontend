import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
// import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "../mapStyles"

function Map() {

  const allUsers = useSelector(state => state.allUsers)
  
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedUser(null);
      }
    }
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, [])

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {allUsers.map(user => (
        <Marker
          key={user.id}
          position={{
            lat: user.lat,
            lng: user.lng
          }}
          onClick={() => {
            setSelectedUser(user);
          }}
          icon={{
            url: `/gd.jpg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {selectedUser && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedUser(null);
          }}
          position={{
            lat: selectedUser.lat,
            lng: selectedUser.lng
          }}
        >
          <div>
            <h2>{selectedUser.displayname}</h2>
            <p>{selectedUser.bio}</p>
            <p>{selectedUser.donated_hour}</p>
            <p>{selectedUser.location}</p>
            <p>{selectedUser.time_slot}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map))


export default function Find() {

  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )

}