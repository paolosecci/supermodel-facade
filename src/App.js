import React from 'react';
import './App.css';
import Nav from './Nav';
import Stage from './Stage';
import Browse from './Browse';
import Entry from './Entry';
import Runway from './Runway';
import SupermodelDisplay from './SupermodelDisplay';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Entry} />
                    <Route path="/stage" component={Stage} />
                    <Route path="/browse" component={Browse} />
                    <Route path="/supermodel/:name" component={SupermodelDisplay} />
                    <Route path="/runway" component={Runway} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
