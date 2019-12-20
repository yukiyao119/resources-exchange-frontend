import React from 'react'
import Skillboard from './Skillboard'
import { Header } from 'semantic-ui-react'


const Home = ({ mobile }) => {

  // const dispatch = useDispatch()
  // useEffect(() => { dispatch(loadAllUsers()) }, [dispatch])
  
  const headerH1 = {
    fontSize: mobile ? '2em' : '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: mobile ? '1.5em' : '3em',
  }
  
  const headerH2 = {
    fontSize: mobile ? '1.5em' : '1.7em',
    fontWeight: 'normal',
    marginTop: mobile ? '0.5em' : '1.5em',
  }


  return (
    <React.Fragment >
      <div style={homeStyle}>
        <Header
          as='h1'
          content='Resources Xchange'
          inverted
          textAlign='center'
          style={headerH1}
        />
        <Header
          as='h2'
          content='Learn new skills another way.'
          inverted
          textAlign='center'
          style={headerH2}
        />
      </div>
      <Skillboard />
    </React.Fragment>
  )


}

const homeStyle = {
  display: "inline-block",
  width: "100%",
  height: "600px",
  backgroundImage: `url(${"/artem-beliaikin-v6kii3H5CcU-unsplash.jpg"})`,
  backgroundSize: 'cover',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}

export default Home

