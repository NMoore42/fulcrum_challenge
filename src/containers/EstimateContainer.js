import { Component } from 'react';
import { Container, Image, Grid, Step } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import StepCard from '../components/StepCard'
import DetailsContainer from './DetailsContainer'
import ResourcesContainer from './ResourcesContainer'
import ConfirmContainer from './ConfirmContainer'
import myImage from '../logo.png';
import TaskModal from '../components/TaskModal'


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
      confirmComplete: false,
      workTaskEdit: false,
      open: false
    }
  }

  handleSubmit = (formType, formValues) => {
    this.setState({[formType]: formValues})
  }

  editWorkTask = (workTask) => {
    this.setState({open: true, workTaskEdit: workTask})
  }

  handleWorkTaskSubmit = (newWorkTask) => {
    const index = this.filterForWorkTaskIndex(newWorkTask)
    index !== -1 ? this.submitEditedTask(newWorkTask, index) : this.submitNewTask(newWorkTask)
  }

  submitEditedTask = (newWorkTask, index) => {
    const newResources = this.state.resources
    newResources[index] = newWorkTask
    this.setState({resources: newResources})
  }

  submitNewTask = (newWorkTask) => {
    this.setState({resources: [...this.state.resources, newWorkTask]})
  }

  filterForWorkTaskIndex = (newWorkTask) => {
    return this.state.resources.findIndex(workTask => workTask.id === newWorkTask.id)
  }

  handleStepFinalize = (step) => {
    this.setState({[step]: true})
  }

  setOpen = (status) => {
    status ? this.setState({open: status}) : this.setState({open: status, workTaskEdit: false})
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
                active={this.state.active === step.name}
             />
    })
  }

  render(){
    const { details, resources } = this.state
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
                   render={(props) => <DetailsContainer details={details} handleSubmit={this.handleSubmit} history={props.history} handleStepFinalize={this.handleStepFinalize}/>}
                   />
                 <Route
                   exact path="/resources"
                   render={(props) => <ResourcesContainer resources={resources} handleStepFinalize={this.handleStepFinalize}
                   editWorkTask={this.editWorkTask} handleWorkTaskSubmit={this.handleWorkTaskSubmit} history={props.history} />}
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
        {this.state.open && <TaskModal setOpen={this.setOpen} open={this.state.open} workTaskEdit={this.state.workTaskEdit} hideBtn={true} handleWorkTaskSubmit={this.handleWorkTaskSubmit}/>}
      </Grid>
    )
  }
}

export default EstimateContainer;
