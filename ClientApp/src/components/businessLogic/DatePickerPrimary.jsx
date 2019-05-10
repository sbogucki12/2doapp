import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

function DatePickerPrimary(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate >
            <TextField
                id="datetime-local"
                label="Deadline"
                type="datetime-local"

                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(event, date) => props.handleDateChange(event, date)}
            />
        </form>
    );
}

export default withStyles(styles)(DatePickerPrimary);