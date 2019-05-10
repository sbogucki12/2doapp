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
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        marginTop: '25vh'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '2%',
        marginBottom: '2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '90%'
    },
    listPaper: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '2%',
        marginBottom: '2%',
        paddingLeft: 0,
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        margin: theme.spacing.unit,
    },
    icon: {
        paddingLeft: '1%',
        paddingRight: '1%',
    }
});

class SavedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdd2Do: false,
            showButton: true,
            completedList: [],
            listItemBackground: null,
            showCompletedList: true,
            savedToDoList: [],
            toDoDescription: "",
            toDoDate: undefined,
            listName: ""
        }
    }

    handleShowAdd2Do = () => {
        this.setState({
            showAdd2Do: true,
            showButton: false
        })
    }

    handleComplete = toDo => {
        if (this.state.showCompletedList !== true) {
            this.setState({
                showCompletedList: true
            })
        };

        for (var i = 0; i < this.state.completedList.length; i++) {
            if (this.state.completedList[i].description === toDo.description) {
                return;
            }
        };

        this.setState(prevState => ({
            completedList: [...prevState.completedList, toDo]
        }))
    }

    handleHideCompletedList = () => {
        this.setState({
            showCompletedList: false
        })
    }

    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value
        });
    };

    handleSave2DoDescription = () => {
        this.setState(prevState => ({
            savedToDoList: [...prevState.savedToDoList, { "id": prevState.toDoId++, "description": this.state.toDoDescription, "toDoDate": this.state.toDoDate }]
        }));
    }

    handleRemove = name => {
        this.setState({
            savedToDoList: this.state.savedToDoList.filter(el => el !== name)
        })
    };

    handleDateChange = (date) => {
        console.log(date.target.value)
        let myDate = moment(date.target.value, 'YYYY-MM-DD hh:mm').toString();
        let slicedDate = myDate.slice(0, 21);
        this.setState({
            toDoDate: slicedDate
        })
    }

    handleSavedList = () => {
        const savedList = this.state.savedToDoList;
        const listName = this.state.listName;
        localStorage.setItem("savedList", JSON.stringify(savedList));
        localStorage.setItem("listName", listName);
    }

    componentDidMount() {
        const savedList = JSON.parse(localStorage.getItem("savedList"));
        const listName = localStorage.getItem("listName")
        this.setState({
            savedToDoList: savedList,
            listName: listName
        })
    }

    render() {
        const { classes } = this.props;
        const listName = this.state.listName;
        const showAdd2Do = this.state.showAdd2Do;
        const showButton = this.state.showButton;
        const completedToDos = this.state.completedList;
        const toDos = this.state.savedToDoList;

        let toDoList =
            <Typography variant="body1" color="secondary" style={{ fontSize: '2vw' }} gutterBottom>
                {`No 2Dos Yet`}
            </Typography>;

        if (toDos.length > 0) {
            toDoList =
                <Paper className={classes.listPaper} elevation={6}>
                    <List style={{ flexDirection: 'row', width: '100%' }}>
                        {toDos.map(toDo => (
                            <ListItem key={toDo.id} role={undefined} dense style={{ 'backgroundColor': completedToDos.includes(toDo) ? 'rgba(177, 250, 200, 0.49)' : null, paddingLeft: 1 }} >
                                <span style={{ width: '25%' }}><ListItemText primary={`Due: ${toDo.toDoDate}`} /></span>
                                <span style={{ width: '55%' }}><Typography
                                    variant="caption"
                                    style={{
                                        overflowWrap: 'break-word',
                                        textAlign: 'center',
                                        paddingLeft: 2
                                    }}
                                    gutterBottom
                                >
                                    {toDo.description}
                                </Typography>
                                </span>
                                <span style={{ width: '20%' }}>
                                    <IconButton onClick={() => this.handleComplete(toDo)} className={classes.icon}>
                                        <CompleteIcon color="primary" />
                                    </IconButton>
                                    <ListItemSecondaryAction >
                                        <IconButton aria-label="Delete ToDo" onClick={() => { this.handleRemove(toDo) }} className={classes.icon} >
                                            <DeleteIcon color="secondary" />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </span>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="outlined" color="secondary" className={classes.button} onClick={this.handleSavedList}>
                        {`Save List`}
                    </Button>
                </Paper>
        };

        const showCompletedList = this.state.showCompletedList;
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
                    <List style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 250 }}>
                        {completedToDos.map(toDo => (
                            <ListItem key={toDo.id} button dense tyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 250 }}>
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                        overflowWrap: 'break-word',
                                        width: 200,
                                        textAlign: 'center',
                                        fontSize: '2vw'
                                    }}
                                    gutterBottom
                                >
                                    {toDo.description}
                                </Typography>
                                <ListItemSecondaryAction style={{ width: 25 }}>
                                    <TwitterShareButton title={"Just Completed: " + `${toDo.description}`} url="http://2do.azurewebsites.net/">
                                        <TwitterIcon size={15} round />
                                    </TwitterShareButton>

                                </ListItemSecondaryAction>

                            </ListItem>
                        ))}
                    </List>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleHideCompletedList}>
                        {`Hide Completed 2Dos`}
                    </Button>
                </Paper>
        };

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
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
                                toDos={this.state.savedToDoList}
                                toDoDate={this.state.toDoDate}
                                handleDateChange={this.handleDateChange}
                                handleChange={this.handleChange}
                                handleSave2DoDescription={this.handleSave2DoDescription}
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
                    {showCompletedList ? completedList : null}
                </Paper>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    style={{ color: '#000000' }}
                    size="large"
                    component={Link}
                    to="/switch"
                >
                    {`Home`}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(SavedList)