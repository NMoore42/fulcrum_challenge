import { Component } from 'react';
import Home from './components/Home';
import EstimateContainer from './containers/EstimateContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true,
      success: false
    }
  }

  toggleEstimateContainer = () => {
    this.setState({
      home: !this.state.home
    })
  }

  submitSuccess = () => {
    this.setState({
      success: true
    })
  }

  render() {
    return(
      <Router>
        <div>
          {
            this.state.home
              ?
            <Home
              toggleEstimateContainer={this.toggleEstimateContainer}
              success={this.state.success}/>
              :
            <EstimateContainer
              submitSuccess={this.submitSuccess}
              toggleEstimateContainer={this.toggleEstimateContainer} />
          }
        </div>
      </Router>
    )
  }
}

export default App;
