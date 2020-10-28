import { Component } from 'react'
import { Form } from 'semantic-ui-react'

class NewItemCard extends Component {
  constructor() {
    super()
    this.state = {
      description: "",
      qty: "",
      units: "",
      labor: "",
      materials: ""
    }
  }

  areFieldsComplete = () => {
    const {description, qty, units, labor, materials} = this.state;
    return description !== "" && qty !== "" && units !== "" && labor !== "" && materials !== ""
  }



  render(){
    return (
      <Form.Group>
        <Form.Input fluid label={`Item ${this.props.taskNum} Description`} placeholder={`Enter Item ${this.props.taskNum} Description`} width={8} name="description" value={this.props.description} onChange={this.props.handleChange} />
        <Form.Input label='Qty' type="number" min={0} width={2} name="qty" value={this.props.qty} onChange={this.props.handleChange} />
        <Form.Input label='Unit' width={2} name="units" value={this.props.units} onChange={this.props.handleChange} />
        <Form.Input label='Material Cost' type="number" min={0} width={2} name="labor" value={this.props.labor} onChange={this.props.handleChange} />
        <Form.Input label='Labor Cost' type="number" min={0} width={2} name="materials" value={this.props.materials} onChange={this.props.handleChange} />
      </Form.Group>
    )
  }
}

export default NewItemCard
