import { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Home from './components/Home';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true
    }
  }
  render() {
    return(
      <div>
        <Grid id="app-container" verticalAlign='middle' columns={1} centered>
          <Grid.Column>
            <Home />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App;
