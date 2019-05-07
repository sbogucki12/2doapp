import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 290
    },
    button: {
        margin: theme.spacing.unit
    }
});

const ListTitleInput = (props) => {

    const { classes } = props;
    const showTitleInput = props.showTitleInput;

    const listTitleInputForm =
        <div className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="List Name"
                    className={classes.textField}
                    value={props.listName}
                    onChange={props.handleChange('listName')}
                    margin="normal"
                    variant="outlined"
                    helperText="Please Enter a Name for Your 2Do List"
                />
            </form>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
                onClick={props.handleSaveTitle}
            >
                {`Save Title`}
            </Button>
        </div>;

    return (
        <div>
            {showTitleInput ? listTitleInputForm : null}
        </div>
    )
}

export default withStyles(styles)(ListTitleInput);