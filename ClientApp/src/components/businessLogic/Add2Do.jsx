import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000'
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
        margin: theme.spacing.unit,
    }
});

let buttonText = "Save 2Do";

const Add2Do = props => {
    const { classes } = props;
    const toDosLength = props.toDos.length;
    console.log(props.toDoDescription)

    if (toDosLength > 0) {
        buttonText = "Add Another 2D0"
    }

    return (
        <div className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off" >
                <TextField
                    id="outlined-name"
                    label="2Do Description"
                    className={classes.textField}
                    value={props.toDoDescription}
                    onChange={props.handleChange('toDoDescription')}
                    margin="normal"
                    variant="outlined"
                    helperText="Describe 2Do"
                />
            </form>
            <Button variant="outlined" color="primary" className={classes.button} onClick={props.handleSave2DoDescription} >
                {buttonText}
            </Button>

        </div>
    )
}

export default withStyles(styles)(Add2Do)