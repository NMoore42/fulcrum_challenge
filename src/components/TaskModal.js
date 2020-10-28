import { Component } from 'react'
import { Button, Header, Image, Modal, Form, Container } from 'semantic-ui-react'
import NewItemCard from './NewItemCard'

class TaskModal extends Component {
  constructor() {
    super()
    this.state = {
      workTask: "",
      workItems: [
        {
          description: "",
          qty: "",
          units: "",
          labor: "",
          materials: ""
        }
      ]
    }
  }

  renderNewItemCards = () => {
    return this.state.workItems.map((workItem, index) => {
      return <NewItemCard taskNum={index + 1} {...workItem} handleChange={this.handleChange}/>
    })
  }

  handleWorkTaskChange = (e) => {
    this.setState({workTask: e.target.value})
  }

  handleChange = (e) => {
    const newWorkItemsArr = this.state.workItems;
    newWorkItemsArr[newWorkItemsArr.length - 1][e.target.name] = e.target.value
    this.setState({workItems: newWorkItemsArr})
  }

  addNewItemCard = () => {
    this.setState({
      workItems: [...this.state.workItems, {
        description: "",
        qty: "",
        units: "",
        labor: "",
        materials: ""
      }]
    })
  }

  handleWorkTaskSubmit = () => {
    this.props.setOpen(false)
    this.props.handleWorkTaskSubmit(this.state)
    this.setState({
      workTask: "",
      workItems: [
        {
          description: "",
          qty: "",
          units: "",
          labor: "",
          materials: ""
        }
      ]
    })
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
        trigger={<Button style={{marginTop : 7}} circular icon='plus' floated="right" size="huge" />}
      >
        <Modal.Header>New Work Task</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Work Task' placeholder='Enter work task description' name="workTask" value={this.state.workTask} onChange={this.handleWorkTaskChange}/>
            </Form.Group>
              {this.renderNewItemCards()}
            <Container textAlign="center">
              <Form.Button disabled={!this.areFieldsComplete()} circular icon='plus' onClick={this.addNewItemCard} />
            </Container>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='darkgrey' onClick={() => this.props.setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Confirm Work Task"
            onClick={this.handleWorkTaskSubmit}
            color='blue'
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default TaskModal
