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

const initErrorState = {
  firstNameError: false,
  lastNameError: false,
  buildingError: false,
  priorityError: false,
  repairSummaryError: false
}


class DetailsContainer extends Component {
  constructor(props) {
    const { firstName, lastName, building, priority, repairSummary } = props.details
    super()
    this.state = {
      details: {
        firstName: firstName || "",
        lastName: lastName || "",
        building: building || "",
        priority: priority || "",
        repairSummary: repairSummary || ""
      },
      errors: initErrorState
    }
  }

  renderPriorityRadios = () => {
    return priorities.map(priority => {
      return <Form.Radio
        label={priority.label}
        value={priority.value}
        error={this.state.errors.priorityError}
        checked={this.state.details.priority === priority.value}
        onChange={this.handleRadioSelect}
      />
    })
  }

  submitDetailsFormHandler = () => {
    const detailValueArr = Object.entries(this.state.details) // converts to array of arrays with two elements each: [detailKey: detailValue]
    const errors = detailValueArr.filter(inputArr => inputArr[1] === "") // filters for missing values
    errors.length ? this.assignErrors(detailValueArr) : this.submitDetailsForm()
  }

  submitDetailsForm = () => {
    this.props.history.push("/resources")
    this.props.handleSubmit("details", this.state.details)
    this.props.handleStepFinalize("detailsComplete")
    this.setState({ errors: initErrorState })
  }

  assignErrors = (detailValueArr) => {
    const newErrors = {...this.state.errors}
    detailValueArr.forEach(detail => newErrors[detail[0] + "Error"] = !detail[1])
    this.setState({errors: newErrors})
  }

  handleChange = e => {
    const newDetails = {...this.state.details}
    newDetails[e.target.name] = e.target.value
    this.setState({details: newDetails })
  }

  handleSelect = (e, { value }) => {
    const newDetails = {...this.state.details}
    newDetails.building = value
    this.setState({ details: newDetails  })
  }

  handleRadioSelect = (e, { value }) => {
    const newDetails = {...this.state.details}
    newDetails.priority = value
    this.setState({ details: newDetails  })
  }

  render(){
    const { firstName, lastName, building, repairSummary } = this.state.details
    const { firstNameError, lastNameError, buildingError, repairSummaryError } = this.state.errors
    return(
      <Form>
       <Form.Group widths='equal'>
         <Form.Input
          fluid
          error={{ content: 'Please enter your first name', pointing: 'below' }}
          label='Technician First Name'
          placeholder='Technician First Name'
          name='firstName'
          value={firstName}
          error={firstNameError}
          onChange={this.handleChange}
         />
         <Form.Input
          fluid
          label='Technician Last Name'
          placeholder='Technician Last Name'
          name='lastName'
          value={lastName}
          error={lastNameError}
          onChange={this.handleChange}
         />
         <Form.Select
           fluid
           label='Building'
           options={buildings}
           placeholder='Building'
           name='building'
           value={building}
           error={buildingError}
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
        style={{ minHeight: "20vh" }}
        value={repairSummary}
        error={repairSummaryError}
        onChange={this.handleChange}
       />
       <Grid.Row className="button-spacer">
       </Grid.Row>
       <Form.Button floated="right" onClick={this.submitDetailsFormHandler}>Confirm and Continue</Form.Button>
     </Form>
    )
  }
}

export default DetailsContainer;
