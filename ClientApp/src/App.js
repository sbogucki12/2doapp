import React from 'react';
import { Route } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './components/landing/Landing';
import AppBarDesktop from './components/appBar/AppBarDesktop';
import ToDoPrimaryUI from './components/businessLogic/ToDoPrimaryUI';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBarDesktop />
            <Route exact path='/' component={Landing} />
            <Route exact path='/test' component={ToDoPrimaryUI} />
        </React.Fragment>
    );
}

export default App; 