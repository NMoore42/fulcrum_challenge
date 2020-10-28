import React from 'react';
import { Button, Divider, Grid, Segment, Icon, Container } from 'semantic-ui-react';
import EstimateReviewModal from '../components/EstimateReviewModal'

const ConfirmContainer = (props) => {


  const handleStepClick = (route) => {
    props.history.push(route)
  }

  const submitEstimate = () => {
    handleStepClick("/")
    props.toggleEstimateContainer()
    props.submitSuccess()
  }

  return (
    <div>
      <Segment padded="very" >
       <Grid columns={2} relaxed='very'>
         <Grid.Row className="form-spacer">
         </Grid.Row>
         <Grid.Column>
           <Container textAlign="center">
             <Icon name='magnify' size='massive' />
             <Divider hidden></Divider>
             <EstimateReviewModal {...props.estimate} handleStepFinalize={props.handleStepFinalize} />
           </Container>
         </Grid.Column>

         <Grid.Column verticalAlign='middle' >
           <Container textAlign="center">
             <Icon name='check circle outline' size='massive' />
             <Divider hidden></Divider>
             <Button content='Submit Estimate' size='massive' onClick={submitEstimate}/>
           </Container>
         </Grid.Column>
         <Grid.Row className="form-spacer">
         </Grid.Row>
       </Grid>

       <Divider vertical></Divider>
     </Segment>
     <Grid.Row className="confirm-spacer">
     </Grid.Row>
     <Button content="Back" floated="left" onClick={() => handleStepClick("/resources")} />
   </div>
  )

}

export default ConfirmContainer;
