import React, { Component } from 'react';
import { Route } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Route exact path='/' component={Home} />
        </React.Fragment>
    );
}

export default App; 
    

  
