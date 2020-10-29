import { Component } from 'react';
import { Button, Divider, Grid, Segment, Icon, Container } from 'semantic-ui-react';
import EstimateReviewModal from '../components/EstimateReviewModal'

class ConfirmContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviewed: false
    }
  }

  handleStepClick = (route) => {
    this.props.history.push(route)
  }

  submitEstimate = () => {
    this.handleStepClick("/")
    this.props.toggleEstimateContainer()
    this.props.submitSuccess()
  }

  confirmReview = () => {
    this.setState({reviewed: true})
  }

  render(){
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
               <EstimateReviewModal {...this.props.estimate} confirmReview={this.confirmReview} handleStepFinalize={this.props.handleStepFinalize} />
             </Container>
           </Grid.Column>

           <Grid.Column verticalAlign='middle' >
             <Container textAlign="center">
               <Icon name='check circle outline' size='massive' />
               <Divider hidden></Divider>
               <Button disabled={!this.state.reviewed} content='Submit Estimate' size='massive' onClick={this.submitEstimate}/>
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
