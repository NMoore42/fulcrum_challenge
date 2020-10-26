import React from 'react';
import { Container, Image, Button, Grid } from 'semantic-ui-react';
import myImage from '../logo.png';

const Home = () => {
  return(
    <Container textAlign='center' >
      <Image src={myImage} fluid />
      <Grid verticalAlign='middle' columns={6} centered>
        <Grid.Column fluid>
          <Button compact inverted color="blue" content="Get Started" size="huge" />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Home;
