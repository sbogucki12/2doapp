import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListTitleInput from './ListTitleInput';
import ListPrimary from './ListPrimary';

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
            toDoId: 0
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSaveTitle = () => {
        this.setState({
            showTitleInput: false,
            showList: true
        })
    }

    handleSave2DoDescription = () => {
        this.setState(prevState => ({
            toDos: [...prevState.toDos, { "id": prevState.toDoId++, "description": this.state.toDoDescription }],
            toDoDescription: "Steve"
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
                        handleChange={this.handleChange}
                        handleSave2DoDescription={this.handleSave2DoDescription}

                    /> : null}
                </Paper>

            </div>
        );
    }
}

export default withStyles(styles)(ToDoPrimaryUI);