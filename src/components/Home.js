import React from 'react';
import { Container, Image, Button, Grid } from 'semantic-ui-react';
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
    <Grid id="app-container" verticalAlign='middle' columns={1} centered>
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
  )
}

export default Home;
