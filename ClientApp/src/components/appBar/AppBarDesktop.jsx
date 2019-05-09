﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DoneOutline from '@material-ui/icons/DoneOutlineRounded';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1,
    },
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row'
    },
    button: {
        margin: theme.spacing.unit,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 5,
    },
});

function AppBarDesktop(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="absolute" color="primary">
                <Toolbar>
                    <DoneOutline className={classes.menuButton} color="secondary" aria-label="Logo" />
                    <Typography variant="h6" color="textSecondary" className={classes.grow}>
                        {`2DO`}
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <a href="https://github.com/sbogucki12/2doapp" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>                        
                        <Button variant="contained" color="secondary" style={{ color: '#FFFFFF', width: 90 }} className={classes.button} size="small">
                            {`Docs`}
                            </Button>
                        </a>
                        <a href="https://bogoodski2019.azurewebsites.net/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary" style={{ color: '#FFFFFF', width: 90 }} className={classes.button} size="small">
                            {`BoGoodSki`}
                        </Button>
                        </a>

                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(AppBarDesktop);