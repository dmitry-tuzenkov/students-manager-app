import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

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

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    const { classes, add, edit, remove } = this.props;
    const students = this.props.students.map(student => ({
      age: calcAge(student.birthday, Date.now()),
      ...student,
    }));

    const onAdd = () => add({
      id: students.length + 1,
      first: 'Fist',
      last: 'Last',
      birthday: new Date().toLocaleDateString()
    });

    return (
      <div>
        <Navigation pageName="Students"  />

        <DataTable fields={fields} rows={students} actions={{
          editAction: edit,
          deleteAction: remove,
        }} />

        <Fab onClick={onAdd} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>

      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Students);
