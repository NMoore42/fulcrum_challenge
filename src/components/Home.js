import React from 'react';
import { Container, Image, Button, Grid, Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import myImage from '../logo.png';

const Home = (props) => {
  const history = useHistory()
  history.push("/")

  const handleClick = () => {
    props.toggleEstimateContainer()
    history.push("/details")
  }
  return(
    <React.Fragment>

    <Grid id="app-container" verticalAlign='middle' columns={1} centered>
      <div className="messages" hidden={!props.success}>
      <Message positive floating>Estimate Submitted Successfully!</Message>
      </div>

      <Grid.Column>
        <Container textAlign='center' >
          <Image src={myImage} fluid />
          <Grid verticalAlign='middle' columns={6} centered>
            <Grid.Column fluid>
              <Button
                compact
                inverted
                color="blue"
                content="Get Started"
                size="huge"
                onClick={handleClick}
              />
            </Grid.Column>
          </Grid>
        </Container>

      </Grid.Column>
    </Grid>
    </React.Fragment>
  )
}

export default Home;
