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
      resourcesComplete: false,
      detailsComplete: false,
      confirmComplete: false
    }
  }

  handleSubmit = (formType, formValues) => {
    this.setState({[formType]: formValues})
  }

  handleWorkTaskSubmit = (newWorkTask) => {
    this.setState({resources: [...this.state.resources, newWorkTask]})
  }

  handleStepFinalize = (step) => {
    this.setState({[step]: true})
  }

  renderStepCards = () => {
    const steps = [
      {name: "details", icon: "clipboard", title: "Details", completed: this.state.detailsComplete},
      {name: "resources", icon: "calculator", title: "Materials and Labor", completed: this.state.resourcesComplete},
      {name: "confirm", icon: "eye", title: "Review Estimate", completed: this.state.confirmComplete}
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
                   render={(props) => <DetailsContainer details={this.state.details} handleSubmit={this.handleSubmit} history={props.history} handleStepFinalize={this.handleStepFinalize}/>}
                   />
                 <Route
                   exact path="/resources"
                   render={(props) => <ResourcesContainer resources={this.state.resources} handleStepFinalize={this.handleStepFinalize} handleWorkTaskSubmit={this.handleWorkTaskSubmit} history={props.history} />}
                   />
                 <Route
                   exact path="/confirm"
                   render={(props) => <ConfirmContainer estimate={this.state} history={props.history} toggleEstimateContainer={this.props.toggleEstimateContainer}
                   handleStepFinalize={this.handleStepFinalize} submitSuccess={this.props.submitSuccess}/>}
                   />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

      </Grid>
    )
  }
}

export default EstimateContainer;
