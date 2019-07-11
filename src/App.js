import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard';
import Securities from './components/Securities';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                     <div className="container">
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/securities" render={props => (
                            <React.Fragment>
                                <Securities />
                            </React.Fragment>
                        )} />

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
