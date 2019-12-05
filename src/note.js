import { Segment } from "semantic-ui-react";

{/* <Grid columns='equal'>
  <Grid.Column >

  </Grid.Column>
</Grid>

<Grid >
  <Grid.Row columns={4}>
    <Grid.Column>

    </Grid.Column>
  </Grid.Row>
</Grid>

<Header as="h1">Skill Board</Header>

const extra = (
    <Icon name='user' />
)

<Card
  image='/images/avatar/large/elliot.jpg'
  header={skill.name}
  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  extra={extra}
/>

    {/* <div style={skillStyle}> */}
      {/* <h4 onClick={handleClickSkill}>{skill.name}</h4> */}
    {/* </div> */}
    {/* <br /> */}


{/* <Grid.Column width={10}>
  <Segment>
    <Header>State</Header>
    <pre style={{ overflowX: 'auto' }}>
      {JSON.stringify(this.state, null, 2)}
    </pre>
    <Header>Options</Header>
    <pre style={{ overflowX: 'auto' }}>
      {JSON.stringify(source, null, 2)}
    </pre>
  </Segment>
</Grid.Column> */} 

{/* <Card.Group>
  <Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='./alpaca.jpg'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta>Friends of Elliot</Card.Meta>
      <Card.Description>
      Bio: {bio} 
      Donated hour: <strong>{donated_hour}</strong>
      Location: {location} 
      Open time: {time_slot}
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <Button animated='fade' onClick={()=> handleChange(props.user)}>
      <Button.Content visible>Continue!</Button.Content>
      <Button.Content hidden>Request an Xchange!</Button.Content>
    </Button>
    </Card.Content>

  </Card>
</Card.Group> */}


{/* <Form>
<Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
<Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
</Form> */}


{/* <Grid columns={2} divided>

      <Grid.Column>
        <Segment>
        <div>
        <h2>Name: {displayname}</h2>
        <h2>Image: <br/>
          <img src="./alpaca.jpg" alt="profilePic"/></h2>
        <h2>bio: {bio}</h2>
        <h2>Location: {location}</h2>
        <h2>Time slot: {time_slot}</h2>
        <h2>Donated hours: {donated_hour}</h2>
        <h2>My skills: </h2>
      </div>
      <div>{mySkillsText}</div>
        </Segment>
      </Grid.Column>

      <Grid.Column>
      <AddSkillForm />
      <EditInfoForm />
      </Grid.Column>

  </Grid> */}


  <Card>
    <Image src='/alpaca.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Name: {displayname}</Card.Header>
      <Card.Meta>
        <span className='date'>Donated hours: {donated_hour}</span>
      </Card.Meta>
      <Card.Description>
        Bio: {bio}
        Location: {location}
        Time slot: {time_slot}
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <Icon name='user' />
      My skills: {mySkillsText}
    </Card.Content>

  </Card>

<List bulleted>
<List.Item>Gaining Access</List.Item>
<List.Item>Inviting Friends</List.Item>
<List.Item>
  Benefits
  <List.List>
    <List.Item href='#'>Link to somewhere</List.Item>
    <List.Item>Rebates</List.Item>
    <List.Item>Discounts</List.Item>
  </List.List>
</List.Item>
<List.Item>Warranty</List.Item>
</List>