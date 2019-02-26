import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Navigation from './navigation';
import DataTable from '../components/ui/DataTable';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});


const calcAge = (date1, date2) => {
  return new Date(date2).getYear() - new Date(date1).getYear();
};

const fields = ['id', 'first', 'last', 'age', 'birthday'];

export class Students extends React.Component {

  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    const { classes, update, remove } = this.props;
    const students = this.props.students.map(student => ({
      age: calcAge(student.birthday, Date.now()),
      ...student,
    }));


    return (
      <div>
        <Navigation pageName="Students"  />

        <DataTable fields={fields} rows={students} actions={{
          editAction: (student) => update(student.id, student),
          deleteAction: (student) => remove(student.id),
        }} />

        <Fab onClick={this.handleClickOpen} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>

        <Dialog
          fullScreen={false}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
        
          <DialogTitle id="responsive-dialog-title">
            New student
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              For better UI/UX form should be in modal.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Create
            </Button>
          </DialogActions>

        </Dialog>

      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Students);
