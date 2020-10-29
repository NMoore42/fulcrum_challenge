import { Component } from 'react'
import { Button, Modal, Form, Container, Message } from 'semantic-ui-react'
import NewItemCard from './NewItemCard'
import uuid from 'react-uuid'

class TaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.workTaskEdit || {
      workTask: "",
      workItems: [
        {
          description: "",
          qty: "",
          units: "",
          labor: "",
          materials: "",
          id: uuid()
        }
      ],
      error: false,
      id: uuid()
    }
  }

  newOrEdit = () => {
    return this.props.workTaskEdit ? "Edit" : "New"
  }

  renderNewItemCards = () => {
    return this.state.workItems.map((workItem, index) => {
      return <NewItemCard taskNum={index + 1} {...workItem} handleChange={this.handleChange}/>
    })
  }

  handleWorkTaskChange = (e) => {
    this.setState({workTask: e.target.value})
  }

  handleChange = (e, id) => {
    const newWorkItemsArr = this.state.workItems;
    const changedWorkItem = newWorkItemsArr.find( workItem => workItem.id === id)
    changedWorkItem[e.target.name] = e.target.value
    this.setState({workItems: newWorkItemsArr})
  }

  addNewItemCard = () => {
    this.setState({
      workItems: [...this.state.workItems, {
        description: "",
        qty: "",
        units: "",
        labor: "",
        materials: "",
        id: uuid()
      }]
    })
  }

  detectErrors = () => {
    const strippedData = []
    strippedData.push(this.state.workTask)
    this.state.workItems.forEach(item => strippedData.push(Object.entries(item).flat()))
    return strippedData.flat().includes("")
  } //strips all data into flatten array of state, checks to see if there is a non value of "" present.  If so, returns true if non-value present.

  submitWorkTask = () => {
    this.props.setOpen(false)
    this.props.handleWorkTaskSubmit(this.state)
    this.clearState()
  }

  closeModal = () => {
    this.props.setOpen(false)
    this.clearState()
  }

  clearState = () => {
    this.setState({
      workTask: "",
      workItems: [
        {
          description: "",
          qty: "",
          units: "",
          labor: "",
          materials: "",
          id: uuid()
        }
      ],
      error: false,
      id: uuid()
    })
  }

  assignErrors = () => {
    this.setState({error: true})
  }

  handleWorkTaskSubmit = () => {
    this.detectErrors() ? this.assignErrors() : this.submitWorkTask()
  }


  areFieldsComplete = () => {
    const { workItems } = this.state;
    if (!workItems.length){
       return false
    } else {
      const {description, qty, units, labor, materials} = workItems[workItems.length -1]
      return description !== "" && qty !== "" && units !== "" && labor !== "" && materials !== ""
    }
  }

  render(){
    return (
      <Modal
        onClose={() => this.props.setOpen(false)}
        onOpen={() => this.props.setOpen(true)}
        open={this.props.open}
        trigger={
          <div hidden={this.props.hideBtn}>
            <Button style={{marginTop : 7}} circular icon='plus' floated="right" size="huge" />
          </div>}>
        <Modal.Header>{this.newOrEdit()} Work Task</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Work Task'
                placeholder='Enter work task description'
                name="workTask"
                value={this.state.workTask}
                onChange={this.handleWorkTaskChange}/>
            </Form.Group>
              {this.renderNewItemCards()}
            <Container textAlign="center">
              <Form.Button
                disabled={!this.areFieldsComplete()}
                circular
                icon='plus'
                onClick={this.addNewItemCard} />
            </Container>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='darkgrey' onClick={this.closeModal}>
            Cancel
          </Button>
          <Button
            content="Confirm Work Task"
            onClick={this.handleWorkTaskSubmit}
            color='blue'
          />
          <Message hidden={!this.state.error} negative>
            <Container textAlign="center">
            <Message.Header >Please fill out all fields to continue</Message.Header>
            </Container>
          </Message>
        </Modal.Actions>

      </Modal>
    )
  }
}

export default TaskModal
