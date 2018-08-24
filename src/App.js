import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

//MainView
import MainView from './MainView'

//Customers
import Customers from './components/cutsomer-list'


class App extends Component {

    render(){

        return(
            <div>
                <Router>

                <div className="App">

                    {/* MainView */}
                    <Route path="/Main" component={MainView}></Route>

                    {/*Customer Table View*/}
                    <Route path="/sort" component={Customers}></Route>


                </div>
                </Router>
            </div>
        )

    }
}

export default App;
