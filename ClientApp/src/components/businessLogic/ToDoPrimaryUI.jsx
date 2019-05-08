﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListTitleInput from './ListTitleInput';
import ListPrimary from './ListPrimary';
import * as moment from 'moment';

const styles = theme => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit
    },
});

class ToDoPrimaryUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: "",
            showTitleInput: true,
            showList: false,
            toDos: [],
            toDoDescription: "",
            toDoId: 0, 
            toDoDate: undefined,            
        }
    }

    handleChange = name => event => {        
        this.setState({
            [name]: event.target.value            
        });
    };

    handleDateChange = (date) => { 
        console.log(date.target.value)
        let myDate = moment(date.target.value, 'YYYY-MM-DD hh:mm').toString();
        let slicedDate = myDate.slice(0, 21);
        this.setState({
            toDoDate: slicedDate
        })
    }

    
    handleSaveTitle = () => {
        this.setState({
            showTitleInput: false,
            showList: true
        })
    }

    handleSave2DoDescription = () => {
        this.setState(prevState => ({
            toDos: [...prevState.toDos, { "id": prevState.toDoId++, "description": this.state.toDoDescription, "toDoDate": this.state.toDoDate }]            
        }));
    }
       
    render() {
        const { classes } = this.props;
        const showList = this.state.showList;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <ListTitleInput
                        handleChange={this.handleChange}
                        handleSaveTitle={this.handleSaveTitle}
                        listName={this.state.listName}
                        showTitleInput={this.state.showTitleInput}
                    />
                    {showList ? <ListPrimary
                        listName={this.state.listName}
                        toDos={this.state.toDos}
                        toDoDate={this.state.toDoDate}
                        handleChange={this.handleChange}
                        handleDateChange={this.handleDateChange}
                        handleSave2DoDescription={this.handleSave2DoDescription}
                    /> : null}
                </Paper>

            </div>
        );
    }
}

export default withStyles(styles)(ToDoPrimaryUI);