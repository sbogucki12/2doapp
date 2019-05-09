import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Add2Do from './Add2Do';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/RemoveCircleTwoTone';
import CompleteIcon from '@material-ui/icons/CheckCircle';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '2%',
        marginBottom: '2%'
    },
    progressBar: {
        width: 200,
        height: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 5
    },
    button: {
        margin: theme.spacing.unit,
    }
});


class ListPrimary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdd2Do: false,
            showButton: true,
            completedList: []
        }
    }

    handleShowAdd2Do = () => {
        this.setState({
            showAdd2Do: true,
            showButton: false
        })
    }

    handleComplete = toDo => {
        console.log(toDo)
        this.setState(prevState => ({
            completedList: [...prevState.completedList, toDo]
        }))
    }

    render() {
        const { classes } = this.props;
        const listName = this.props.listName;
        const showAdd2Do = this.state.showAdd2Do;
        const showButton = this.state.showButton;
        const completedToDos = this.state.completedList;
        const toDos = this.props.toDos;
        let toDoList =
            <Typography variant="body1" color="secondary" style={{ fontSize: '2vw' }} gutterBottom>
                {`No 2Dos Yet`}
            </Typography>;

        if (toDos.length > 0) {
            toDoList =
                <Paper className={classes.paperRoot} elevation={6}>
                    <List>
                        {toDos.map(toDo => (
                            <ListItem key={toDo.id} role={undefined} dense>
                                <ListItemText primary={`Due: ${toDo.toDoDate}`} style={{ paddingRight: 2, margin: 0 }} />
                                <Typography
                                    variant="caption"
                                    style={{
                                        overflowWrap: 'break-word',
                                        maxWidth: 150,
                                        paddingRight: '5%',
                                        textAlign: 'center'
                                    }}
                                    gutterBottom
                                >
                                    {toDo.description}
                                </Typography>
                                <IconButton onClick={() => this.handleComplete(toDo)}>
                                    <CompleteIcon color="primary" />
                                </IconButton>
                                <ListItemSecondaryAction >
                                    <IconButton aria-label="Delete ToDo" onClick={() => { this.props.handleRemove(toDo) }} >
                                        <DeleteIcon color="secondary" />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
        };
        let completedList = null;
        if (completedToDos.length > 0) {
            completedList =
                <Paper className={classes.paperRoot} elevation={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h5" gutterBottom>
                        {`Completed 2Dos:`}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {`👏`}
                    </Typography>
                    <List>
                        {completedToDos.map(toDo => (
                            <ListItem key={toDo.id} button dense>
                                <Typography
                                    variant="caption"
                                    style={{
                                        overflowWrap: 'break-word',
                                        maxWidth: 250,
                                        textAlign: 'center',
                                        fontSize: '2vw'
                                    }}
                                    gutterBottom
                                >
                                    {toDo.description}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Paper>;
        }

        return (
            <div className={classes.root}>
                <Typography
                    gutterBottom
                    style={{
                        fontFamily: `'Gugi', cursive`,
                        fontSize: '6vw',
                        textAlign: 'center',
                        overflowWrap: 'break-word',
                        textShadow: `2px 2px rgba(236, 180, 85, 1)`

                    }}>
                    {listName}
                </Typography>
                <Typography gutterBottom style={{ fontSize: '4vw' }}>
                    {`To Do:`}
                </Typography>
                {toDoList}
                <Paper className={classes.paperRoot} elevation={6}>
                    {showAdd2Do ?
                        <Add2Do
                            toDos={this.props.toDos}
                            toDoDate={this.props.toDoDate}
                            handleDateChange={this.props.handleDateChange}
                            handleChange={this.props.handleChange}
                            handleSave2DoDescription={this.props.handleSave2DoDescription}
                        /> : null}

                    {showButton ?
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handleShowAdd2Do}
                        >
                            {`ADD 2DO`}
                        </Button> : null}
                </Paper>
                {completedList}
            </div>
        )
    }
}

export default withStyles(styles)(ListPrimary)