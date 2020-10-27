import { Component } from 'react';
import { Container, Image, Button, Grid, Icon, Step } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import StepCard from '../components/StepCard'
import DetailsContainer from './DetailsContainer'
import ResourcesContainer from './ResourcesContainer'
import ConfirmContainer from './ConfirmContainer'
import myImage from '../logo.png';


class EstimateContainer extends Component {
  constructor() {
    super()
    this.state = {
      details: {
        firstName: "",
        lastName: "",
        building: "",
        priority: "",
        repairSummary: ""
      },
      resources: [],
      confirm: {}
    }
  }


  handleSubmit = (formType, formValues) => {
    formValues.completed = true
    this.setState({
      [formType]: formValues
    })
  }

  renderStepCards = () => {
    const steps = [
      {name: "details", icon: "clipboard", title: "Details", state: this.state.details},
      {name: "resources", icon: "calculator", title: "Materials and Labor", state: this.state.resources},
      {name: "confirm", icon: "eye", title: "Confirm Estimate", state: this.state.confirm}
    ]

    return steps.map((step, index) => {
      return <StepCard
                step={step}
                key={index}
                active={this.state.active == step.name}
             />
    })
  }

  render(){
    const { details, resources, confirm, active } = this.state
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
                <Step.Group widths={3} unstackable>
                  {this.renderStepCards()}
                </Step.Group>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

        <Grid.Row className="form-spacer">
        </Grid.Row>

        <Grid.Row>
          <Container textAlign='center' >
            <Grid columns={1} centered>
              <Grid.Column fluid>
                 <Route
                   exact path="/details"
                   render={(props) => <DetailsContainer details={this.state.details} handleSubmit={this.handleSubmit} history={props.history} />}
                   />
                   <Route
                     exact path="/resources"
                     render={(props) => <ResourcesContainer resources={this.state.resources} handleSubmit={this.handleSubmit} history={props.history} />}
                     />
                 <Route exact path="/confirm" component={ConfirmContainer} />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

      </Grid>
    )
  }
}

export default EstimateContainer;
