import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Navigation from './navigation';
import DataTable from '../components/ui/DataTable';
import GradeForm from '../components/GradeForm';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

const fields = ['id', 'student_name', 'profession', 'grade', 'completed_at'];

export class Grades extends React.Component {

  componentDidMount() {
    this.props.fetchAllGrades();
    this.props.fetchAllStudents();
  }

  render() {
    const { classes, grades, students, add, remove} = this.props;

    return (
      <div>
        <Navigation pageName="Grades" />

        {students.length && <GradeForm isCreate={true} createOrUpdate={add} students={students} />}

        <DataTable fields={fields} rows={grades} actions={{
          editAction: (student) => console.log('update', student.id, student),
          deleteAction: (student) => remove(student.id),
        }} />

        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>

      </div>
    );
  }
};

Grades.reactProps = {
  grades: PropTypes.array,
  students: PropTypes.array.isRequred,
  fetchAll: PropTypes.func.isRequred,
};

export default withStyles(styles, { withTheme: true })(Grades);
