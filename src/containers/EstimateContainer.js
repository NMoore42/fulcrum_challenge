import { Component } from 'react';
import { Container, Image, Button, Grid, Icon, Step } from 'semantic-ui-react';
import myImage from '../logo.png';

class EstimateContainer extends Component {
  constructor() {
    super()
    this.state = {
      details: {},
      materialAndLabor: {},
      confirm: {},
      active: "details"
    }
  }

  handleStepChange = (stepName) => {
    this.setState({
      active: stepName
    })
  }

  render(){
    const { details, materialAndLabor, confirm, active } = this.state
    return(
      <Grid centered>
        <Grid.Row>
          <Container textAlign='center' >
            <Grid columns={3} centered>
              <Grid.Column fluid>
                <Image src={myImage} fluid />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container textAlign='center' >
            <Grid columns={1} centered>
              <Grid.Column fluid>
                <Step.Group widths={3}>

                 <Step
                   completed={details.completed}
                   active={active == "details"}
                   onClick={() => this.handleStepChange("details")}
                 >
                   <Icon name='clipboard' />
                   <Step.Content>
                     <Step.Title>Details</Step.Title>
                   </Step.Content>
                 </Step>

                 <Step
                  completed={materialAndLabor.completed}
                  active={active == "materialAndLabor"}
                  onClick={() => this.handleStepChange("materialAndLabor")}
                 >
                   <Icon name='calculator' />
                   <Step.Content>
                     <Step.Title>Material and Labor</Step.Title>
                   </Step.Content>
                 </Step>

                 <Step
                  completed={confirm.completed}
                  active={active == "confirm"}
                  onClick={() => this.handleStepChange("confirm")}
                 >
                   <Icon name='eye' />
                   <Step.Content>
                     <Step.Title>Confirm Estimate</Step.Title>
                   </Step.Content>
                 </Step>

                </Step.Group>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    )
  }
}

export default EstimateContainer;
