import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from "./actions/simpleActions";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//MainView
import MainView from './MainView'

//Customers
import Customers from './components/customer-list'

class App extends Component {

    simpleAction = (event) => {
        this.props.simpleAction();
    };

  render() {
    return (
      <div className="App">

          {/*<header className="App-header">*/}
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              {/*<h1 className="App-title">Welcome to React</h1>*/}
          {/*</header>*/}
          {/*<pre>{JSON.stringify(this.props)}</pre>*/}
          {/*/!*Test Redux*!/*/}
          {/*<button onClick={this.simpleAction}>Test redux action</button>*/}


          <Router>
              <div>
                  {/* MainView */}
                  <Route path="/Main" component={MainView}></Route>

                  {/*Customer Table View*/}
                  <Route path="/sort" component={Customers}></Route>

              </div>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
