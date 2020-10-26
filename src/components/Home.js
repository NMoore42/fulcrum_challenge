import React from 'react';
import { Container, Image, Button, Grid } from 'semantic-ui-react';
import myImage from '../logo.png';

const Home = (props) => {
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
                onClick={props.toggleEstimateContainer}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default Home;
