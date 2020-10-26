import React from 'react';
import { Container, Image, Button, Grid } from 'semantic-ui-react';
import myImage from '../logo.png';

const EstimateContainer = (props) => {
  return(
    <Grid columns={2} centered>
      <Grid.Column>
        <Container textAlign='center' >
          <Grid columns={2} centered>
            <Grid.Column fluid>
              <Image src={myImage} fluid />
            </Grid.Column>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default EstimateContainer;
