import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Add2Do from './Add2Do';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000'
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

    handleShowAdd20 = () => {
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
        let toDoList = "No 2Dos Yet";
        if (this.props.toDos.length > 0) {
            toDoList = this.props.toDos.map(item => <li key={item.id}>{item.description}</li>)
        }

        return (
            <div className={classes.root}>
                <Typography gutterBottom style={{ fontSize: '10vh' }}>
                    {listName}
                </Typography>
                <Typography gutterBottom style={{ fontSize: '6vh' }}>
                    {`To Do:`}
                </Typography>
                <ol>
                    {toDoList}
                </ol>
                {showAdd2Do ? <Add2Do
                    toDos={this.props.toDos}
                    handleChange={this.props.handleChange}

                    handleSave2DoDescription={this.props.handleSave2DoDescription}
                /> : null}

                {showButton ? <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleShowAdd20}
                >
                    {`ADD 2DO`}
                </Button> : null}
            </div>
        )
    }

}

export default withStyles(styles)(ListPrimary)