import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        background: `linear-gradient(0deg, rgba(255,255,255,0.6730042358740371) 23%, rgba(94,133,88,0.9363095580028886) 86%);`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButtons: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        margin: theme.spacing.unit
    }
});
class SwitchPrimary extends React.Component {
    state = {
        disabled: false
    };

    componentDidMount() {
        const savedList = JSON.parse(localStorage.getItem("savedList"));
        if (savedList === null || savedList === undefined) {
            this.setState({
                disabled: true
            })
        };
    }

    render() {
        const { classes } = this.props;
        const disabled = this.state.disabled
        const disabledText =
            <div>
                <Typography variant="caption" gutterBottom>
                    {`You currently have no saved list.`}
                </Typography>
            </div>;
        return (
            <div className={classes.root}>
                <div className={classes.mainButtons}>
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
                        component={Link}
                        to='/savedlist'
                        disabled={disabled}
                    >
                        {`Saved List`}
                    </Button>
                </div>
                {disabled ? disabledText : null}
            </div>
        );
    }
}

export default withStyles(styles)(SwitchPrimary);