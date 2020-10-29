import React from 'react'
import { Form } from 'semantic-ui-react'


const NewItemCard = (props) => {

  return (
    <Form.Group>
      <Form.Input fluid label={`Item ${props.taskNum} Description`} placeholder={`Enter Item ${props.taskNum} Description`} width={8} name="description" value={props.description} onChange={(e) => props.handleChange(e, props.id)} />
      <Form.Input label='Qty' type="number" min={0} width={2} name="qty" value={props.qty} onChange={(e) => props.handleChange(e, props.id)} />
      <Form.Input label='Unit' width={2} name="units" value={props.units} onChange={(e) => props.handleChange(e, props.id)} />
      <Form.Input label='Material Cost' type="number" min={0} width={2} name="labor" value={props.labor} onChange={(e) => props.handleChange(e, props.id)} />
      <Form.Input label='Labor Cost' type="number" min={0} width={2} name="materials" value={props.materials} onChange={(e) => props.handleChange(e, props.id)} />
    </Form.Group>
  )

}

export default NewItemCard
