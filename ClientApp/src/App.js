import React from 'react';
import { Route } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './components/landing/Landing';
import AppBarDesktop from './components/appBar/AppBarDesktop';
import ToDoPrimaryUI from './components/businessLogic/ToDoPrimaryUI';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import SwitchPrimary from './components/switchPage/SwitchPrimary';
import SavedList from './components/businessLogic/SavedList';

const App = () => {
    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <CssBaseline />
                <AppBarDesktop />
                <Route exact path='/' component={Landing} />
                <Route exact path='/switch' component={SwitchPrimary} />
                <Route exact path='/main' component={ToDoPrimaryUI} />
                <Route exact path='/savedlist' render={(props) => <SavedList {...props} />} />
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App; 