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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/RemoveCircleTwoTone';

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
    button: {
        margin: theme.spacing.unit,
    }
});


class ListPrimary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdd2Do: false,
            showButton: true
        }
    }

    handleShowAdd2Do = () => {
        this.setState({
            showAdd2Do: true,
            showButton: false
        })
    }    

    render() {
        const { classes } = this.props;
        const listName = this.props.listName;
        const showAdd2Do = this.state.showAdd2Do;
        const showButton = this.state.showButton;
        const toDos = this.props.toDos;
        let toDoList = "No 2Dos Yet";
        if (toDos.length > 0) {
            toDoList =
                <Paper className={classes.paperRoot} elevation={6}>
                    <List>
                    {toDos.map(toDo => (
                        <ListItem key={toDo.id} role={undefined} dense button onClick={this.props.handleToggle(toDo)}>
                                <Checkbox
                                checked={this.props.checked.indexOf(toDo) !== -1}
                                tabIndex={-1}
                                disableRipple
                                dense
                                style={{    padding: 0, margin: 0 }}
                                />
                            <ListItemText primary={`Due: ${toDo.toDoDate}`} style={{ paddingRight: 2, margin: 0 }}/>
                            <p style={{ overflowWrap: 'break-word', maxWidth: 150, paddingRight: '5%' }}>{toDo.description}</p>
                            

                            <ListItemSecondaryAction >
                                <IconButton aria-label="Delete ToDo" onClick={() => { this.props.handleRemove(toDo) }} >
                                        <DeleteIcon color="secondary" />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                    ))}
                    </List>
                </Paper>
        }

        return (
            <div className={classes.root}>                
                <Typography gutterBottom style={{ fontSize: '6vh', textAlign: 'center', overflowWrap: 'break-word', maxWidth: 225 }}>
                    {listName}
                </Typography>
                <Typography gutterBottom style={{ fontSize: '4vh' }}>
                    {`To Do:`}
                </Typography>                
                {toDoList}
                <Paper className={classes.paperRoot} elevation={6}>
                    {showAdd2Do ? <Add2Do
                        toDos={this.props.toDos}
                        toDoDate={this.props.toDoDate}
                        handleDateChange={this.props.handleDateChange}
                        handleChange={this.props.handleChange}
                        handleSave2DoDescription={this.props.handleSave2DoDescription}
                    /> : null}

                    {showButton ? <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleShowAdd2Do}
                    >
                        {`ADD 2DO`}
                        </Button> : null}
                </Paper>
            </div>
        )
    }

}

export default withStyles(styles)(ListPrimary)