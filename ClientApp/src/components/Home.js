import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

const Home = props => {
    const { classes } = props;
    return (
        <div>
            <h1 style={{ fontFamily: `'Roboto', sans-serif` }}>{`Test`}</h1>
            <Button variant="contained" color="primary" className={classes.button}>
                Primary
                </Button>
        </div>
    );

}

    

    


export default withStyles(styles)(Home);