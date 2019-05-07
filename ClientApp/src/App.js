import React  from 'react';
import { Route } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './components/landing/Landing';
import AppBarDesktop from './components/appBar/AppBarDesktop';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBarDesktop/>
            <Route exact path='/' component={Landing} />
        </React.Fragment>
    );
}

export default App; 