import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAll, add, update, remove } from '../actions/grades';
import Grades from './grades';

const mapStateToProps = (state) => ({
  students: state.students.data,
  grades: state.grades.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add,
  update,
  remove,
  fetchAll,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Grades);
