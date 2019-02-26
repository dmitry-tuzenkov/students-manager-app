import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAll as fetchAllGrades, add, update, remove } from '../actions/grades';
import { fetchAll as fetchAllStudents} from '../actions/students';
import Grades from './grades';

const mapStateToProps = (state) => ({
  students: state.students.data,
  grades: state.grades.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add,
  update,
  remove,
  fetchAllGrades,
  fetchAllStudents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Grades);
