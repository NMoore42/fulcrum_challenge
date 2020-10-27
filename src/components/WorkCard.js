import React from 'react';
import { Table } from 'semantic-ui-react';


const WorkCard = (props) => {

  return(
    <Table.Body>
      <Table.Row>
        <Table.Cell>Alpha Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>2</Table.Cell>
        <Table.Cell textAlign='right'>2</Table.Cell>
        <Table.Cell textAlign='center'>
          11
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='center'>
          11
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 2</Table.Cell>
        <Table.Cell textAlign='right'>12</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign='center'>
          11
        </Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 3</Table.Cell>
        <Table.Cell textAlign='right'>21</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='center'>
          11
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  )
}

export default WorkCard;
