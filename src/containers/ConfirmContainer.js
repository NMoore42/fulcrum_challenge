import { Component } from 'react';
import { Button, Divider, Grid, Segment, Icon, Container } from 'semantic-ui-react';

class ConfirmContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleStepClick = (route) => {
    this.props.history.push(route)
  }


  render(){
    return(
      <div>
        <Segment padded="very" >
         <Grid columns={2} relaxed='very'>
           <Grid.Row className="form-spacer">
           </Grid.Row>
           <Grid.Column>
             <Container textAlign="center">
               <Icon name='magnify' size='massive' />
               <Divider hidden></Divider>
               <Button content='Review Estimate' size='massive' />
             </Container>
           </Grid.Column>

           <Grid.Column verticalAlign='middle' >
             <Container textAlign="center">
               <Icon name='check circle outline' size='massive' />
               <Divider hidden></Divider>
               <Button content='Submit Estimate' size='massive' />
             </Container>
           </Grid.Column>
           <Grid.Row className="form-spacer">
           </Grid.Row>
         </Grid>

         <Divider vertical></Divider>
       </Segment>
       <Grid.Row className="confirm-spacer">
       </Grid.Row>
       <Button content="Back" floated="left" onClick={() => this.handleStepClick("/resources")} />
     </div>
    )
  }
}

export default ConfirmContainer;
