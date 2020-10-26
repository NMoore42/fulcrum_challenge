import { Component } from 'react';
import Home from './components/Home';
import EstimateContainer from './containers/EstimateContainer';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true
    }
  }

  toggleEstimateContainer = () => {
    this.setState({
      home: !this.state.home
    })
  }

  render() {
    return(
      <div>
        {
          this.state.home
            ?
          <Home toggleEstimateContainer={this.toggleEstimateContainer}/>
            :
          <EstimateContainer />
        }
      </div>
    )
  }
}

export default App;
