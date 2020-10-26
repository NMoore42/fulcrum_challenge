import { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'

const buildings = [
  { key: 'a', text: '1459 W Grace Street', value: '1459 W Grace Street' },
  { key: 'b', text: '1123 N Elm Boulevard', value: '1123 N Elm Boulevard' },
  { key: 'c', text: '2114 E Canary Lane', value: '2114 E Canary Lane' },
  { key: 'd', text: '611 S Oval Road', value: '611 S Oval Road' }
]

const priorities = [
  { key: '1', label: '1', value: 1 },
  { key: '2', label: '2', value: 2 },
  { key: '3', label: '3', value: 3 },
  { key: '4', label: '4', value: 4 },
  { key: '5', label: '5', value: 5 }
]


class DetailsContainer extends Component {
  constructor(props) {
    const { firstName, lastName, building, priority, repairSummary } = props.details
    super()
    this.state = {
      firstName: firstName || "",
      lastName: lastName || "",
      building: building || "",
      priority: priority || "",
      repairSummary: repairSummary || ""
    }
  }

  renderPriorityRadios = () => {
    return priorities.map(priority => {
      return <Form.Radio
        label={priority.label}
        value={priority.value}
        checked={this.state.priority === priority.value}
        onChange={this.handleRadioSelect}
      />
    })
  }

  submitDetailsForm = () => {
    this.props.history.push("/resources")
    this.props.handleSubmit("details", this.state)
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value })

  handleSelect = (e, { value }) => this.setState({ building: value })

  handleRadioSelect = (e, { value }) => this.setState({ priority: value })

  render(){
    const { firstName, lastName, building, repairSummary } = this.state
    return(
      <Form>
       <Form.Group widths='equal'>
         <Form.Input
          fluid
          label='Technician First Name'
          placeholder='Technician First Name'
          name='firstName'
          value={firstName}
          onChange={this.handleChange}
         />
         <Form.Input
          fluid
          label='Technician Last Name'
          placeholder='Technician Last Name'
          name='lastName'
          value={lastName}
          onChange={this.handleChange}
         />
         <Form.Select
           fluid
           label='Building'
           options={buildings}
           placeholder='Building'
           name='building'
           value={building}
           onChange={this.handleSelect}
         />
       </Form.Group>
       <Form.Group inline>
         <label>Priority</label>
         {this.renderPriorityRadios()}
       </Form.Group>
       <Form.TextArea
        label='Repair Summary'
        placeholder='Tell us more about the issue...'
        name='repairSummary'
        value={repairSummary}
        onChange={this.handleChange}
       />
       <Grid.Row className="form-spacer">
       </Grid.Row>
       <Form.Button floated="right" onClick={this.submitDetailsForm}>Confirm and Continue</Form.Button>
     </Form>
    )
  }
}

export default DetailsContainer;
