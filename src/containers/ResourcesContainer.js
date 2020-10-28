import { Component } from 'react';
import { Icon, Table, Button, Grid, Popup, Container } from 'semantic-ui-react';
import WorkCard from '../components/WorkCard';
import TaskModal from '../components/TaskModal'

class ResourcesContainer extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleStepClick = (route) => {
    this.props.history.push(route)
  }

  renderWorkCards = () => {
    return <Table.Body>
            {this.props.resources.map( workTask => <WorkCard workTask={workTask} />)}
           </Table.Body>
  }

  toggleConfirmPopup = () => {
    if (this.props.resources.length){
      return <Button
              content="Confirm and Continue"
              floated="right"
              onClick={() => this.handleStepClick("/confirm")} />
    } else {
      return <Popup
              content='Must have at least one work task'
              on='click'
              pinned
              trigger={<Button content="Confirm and Continue" floated="right" />}
  />
    }
  }

  setOpen = (status) => {
    this.setState({open: status})
  }

  renderTaskStatement = () => {
    return (
      <Grid id="work-container" verticalAlign='middle' columns={1} centered >
        <Grid.Column>
          <Container textAlign='center'>
            <h1>No work tasks added!</h1>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }


  render(){
    return(
      <div>
        <div className="container-table">
          <Table celled structured unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center' rowSpan='2'>Work Task</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' rowSpan='2'>Item Description</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' rowSpan='4'>Qty</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' rowSpan='4'>Units</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' colSpan='3'>Costs</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>Material</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Labor</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Total</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.renderWorkCards()}
          </Table>
          {!!this.props.resources.length || this.renderTaskStatement()}
        </div>
        <Grid.Row className="work-task-btn-spacer">
          <TaskModal setOpen={this.setOpen} open={this.state.open} handleWorkTaskSubmit={this.props.handleWorkTaskSubmit}/>
        </Grid.Row>

        <Button content="Back" floated="left" onClick={() => this.handleStepClick("/details")} />
        {this.toggleConfirmPopup()}
      </div>
    )
  }
}


export default ResourcesContainer;
