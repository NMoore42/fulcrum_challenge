import React from 'react';
import { Table, Button } from 'semantic-ui-react';


const WorkCard = (props) => {

  const renderWorkItems = () => {
    let returnCells = []
    props.workTask.workItems.forEach( (workItem, index) => {
      let frag;
      if (!index) {
        frag = <Table.Row >
                <Table.Cell textAlign='center' rowSpan={props.workTask.workItems.length}>{props.workTask.workTask}<div style={{float: "right"}} hidden={props.hidden}><Button  floated="left" icon="edit" size="mini" onClick={() => props.editWorkTask(props.workTask)}/></div></Table.Cell>
                <Table.Cell textAlign='center'>{workItem.description}</Table.Cell>
                <Table.Cell textAlign='center'>{workItem.qty}</Table.Cell>
                <Table.Cell textAlign='center'>{workItem.units}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.materials}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor}</Table.Cell>
                <Table.Cell textAlign='center'>${parseInt(workItem.labor) + parseInt(workItem.materials)}</Table.Cell>
              </Table.Row>
      } else {
        frag = <Table.Row>
                <Table.Cell textAlign='center'>{workItem.description}</Table.Cell>
                <Table.Cell textAlign='center'>{workItem.qty}</Table.Cell>
                <Table.Cell textAlign='center'>{workItem.units}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.materials}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor}</Table.Cell>
                <Table.Cell textAlign='center'>${parseInt(workItem.labor) + parseInt(workItem.materials)}</Table.Cell>
              </Table.Row>

      }
      returnCells.push(frag)
    })
    return returnCells.flat()
  }

  const test = () => {
    console.log("Hi")
  }

  return (
    <React.Fragment>
      {renderWorkItems()}
    </React.Fragment>
  )
}



export default WorkCard;
