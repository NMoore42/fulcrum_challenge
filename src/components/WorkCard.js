import React from 'react';
import { Table } from 'semantic-ui-react';


const WorkCard = (props) => {

  // const tasks = [
  //   {
  //     workTask: "Trimming",
  //     workItems: [
  //       {description: "Demolition", qty: 10, units: "hours", labor: 1000, materials: 0}
  //     ]
  //   }
  // ]

  // const renderWorkTask = () => {
  //   props.workTask.map( task => {
  //     return (
  //       <Table.Row>
  //         <Table.Cell rowSpan={task.workItem.length}>{task.workTask}</Table.Cell>
  //         {renderWorkItems(task.workItems)}
  //       </Table.Row>
  //     )
  //   })
  // }

  const renderWorkItems = () => {
    let returnCells = []
    props.workTask.workItems.forEach( (workItem, index) => {
      let frag;
      if (!index) {
        frag = <Table.Row>
                <Table.Cell rowSpan={props.workTask.workItems.length}>{props.workTask.workTask}</Table.Cell>
                <Table.Cell>{workItem.description}</Table.Cell>
                <Table.Cell textAlign='right'>{workItem.qty}</Table.Cell>
                <Table.Cell textAlign='right'>{workItem.units}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.materials}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor + workItem.materials}</Table.Cell>
              </Table.Row>
      } else {
        frag = <Table.Row>
                <Table.Cell>{workItem.description}</Table.Cell>
                <Table.Cell textAlign='right'>{workItem.qty}</Table.Cell>
                <Table.Cell textAlign='right'>{workItem.units}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.materials}</Table.Cell>
                <Table.Cell textAlign='center'>${workItem.labor + workItem.materials}</Table.Cell>
              </Table.Row>

      }
      returnCells.push(frag)
    })
    return returnCells.flat()
  }

  return (
    <React.Fragment>
      {renderWorkItems()}
    </React.Fragment>
  )
}



export default WorkCard;
