import React from "react";
import ProfileInfo from "../component/ProfileInfo";
import ExchangeList from "./ExchangeList";
import DoneList from "./DoneList";
import { Container } from "semantic-ui-react";

const Profile = () => {

  return (
    <Container >
      <ProfileInfo />
      <Container style={ {"marginTop": "10px", "display": "flex"} }>
        <div style={ {"margin": "5px", "width": "48%"} }>
          <ExchangeList />
        </div>
        <div style={ {"margin": "5px 5px 10px 10px", "width": "48%"} }>
          <DoneList />
        </div>
      </Container>
    </Container>
  )
}


export default Profile;
