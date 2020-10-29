import React from 'react'
import { Button, Icon, Image, Modal, Table, Divider, Grid, Container } from 'semantic-ui-react'
import WorkCard from './WorkCard'

const EstimateReviewModal = (props) => {
  const [open, setOpen] = React.useState(false)

  const renderWorkCards = () => {
    return <Table.Body>
            {props.resources.map( workTask => <WorkCard workTask={workTask} hidden={true}/>)}
           </Table.Body>
  }

  const totalMaterials = (cost) => {
    let materialSum = 0.0;
    props.resources.forEach( workTask => {
      workTask.workItems.forEach( workItem => {
        materialSum += parseFloat(workItem[cost])
      })
    })
    return materialSum
  }

  const handleOpen = () => {
    setOpen(true)
    props.handleStepFinalize("confirmComplete")
  }


  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={handleOpen}
      trigger={<Button content='Review Estimate' size='massive' />}
    >
      <Modal.Header>Estimate Overview</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Grid >
            <Grid.Row columns={3}>
              <Grid.Column>
                <h3>Technician</h3>
                <p>{`${props.details.firstName} ${props.details.lastName}`}</p>
              </Grid.Column>

              <Grid.Column>
                <h3>Building</h3>
                <p>{props.details.building}</p>
              </Grid.Column>
              <Grid.Column>
                <h3>Priority</h3>
                <p>{props.details.priority}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <h3>Repair Summary</h3>
                <p >{props.details.repairSummary}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

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
            {renderWorkCards()}
            <Table.Row>
              <Table.Cell active textAlign='center' colSpan='4'><b>Total</b></Table.Cell>
              <Table.Cell active textAlign='center'><b>${totalMaterials("materials").toFixed(2)}</b></Table.Cell>
              <Table.Cell active textAlign='center'><b>${totalMaterials("labor").toFixed(2)}</b></Table.Cell>
              <Table.Cell active textAlign='center'><b>${(totalMaterials("materials") + totalMaterials("materials")).toFixed(2)}</b></Table.Cell>
            </Table.Row>
          </Table>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EstimateReviewModal
