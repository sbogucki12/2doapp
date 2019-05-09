import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        background: `linear-gradient(0deg, rgba(255,255,255,0.6730042358740371) 23%, rgba(94,133,88,0.9363095580028886) 86%);`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit
    }
});
class SwitchPrimary extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    style={{ color: '#000000', width: 140 }}
                    size="large"
                    component={Link}
                    to='/main'
                >
                    {`New List`}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ color: '#000000', width: 140 }}
                    size="large"
                    onClick={this.handleClickOpen}
                >
                    {`Open Saved`}
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{`Saving Functionality Coming Soon!`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`Please see official DOCS for considerations regarding release features, and future enhancements.`}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <a href="https://github.com/sbogucki12/2doapp" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
                        <Button onClick={this.handleClose} color="primary">
                            {`DOCS`}
                        </Button> 
                        </a>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }    
}

export default withStyles(styles)(SwitchPrimary);