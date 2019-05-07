import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './landingStyle.css';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        width: '100vw',
        minHeight: '100vh',
        background: `linear-gradient(0deg, rgba(255,255,255,0.6730042358740371) 23%, rgba(94,133,88,0.9363095580028886) 86%);`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: '5vh',
    }
};

const Landing = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div style={{
                fontFamily: `'Shadows Into Light Two', cursive`,
                fontStyle: 'italic', color: 'rgba(252, 241, 118, 1)',
                textShadow: '2px 2px rgba(118, 199, 29, 1)',
                fontSize: '4vh'
            }}>
                {`not just another`}
            </div>
            <div id="logo" style={{ padding: 0, margin: 0 }}>
                <span style={{
                    fontFamily: `'Anton', sans-serif`,
                    fontSize: '25vh',
                    color: 'rgba(252, 241, 118, 1)',
                    textShadow: '2px 2px #000000'
                }}>
                    {`2`}
                </span>
                <span style={{
                    fontFamily: `'Anton', sans-serif`,
                    fontSize: '18vh',
                    color: 'rgba(118, 199, 29, 1)',
                    textShadow: '2px 2px rgba(252, 241, 118, 1)'
                }}>
                    {`DO`}
                </span>
            </div>
            <div style={{
                fontFamily: `'Shadows Into Light Two', cursive`,
                fontStyle: 'italic',
                color: 'rgba(252, 241, 118, 1)',
                textShadow: '2px 2px #000000',
                fontSize: '4vh'
            }}>
                {`app`}
            </div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ color: '#000000' }}
                size="large"
            >
                {`Enter`}
            </Button>
        </div>
    );
}

export default withStyles(styles)(Landing);