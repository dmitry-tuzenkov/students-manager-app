import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAll, add, update, remove } from '../actions/students';
import Students from './students';

const mapStateToProps = (state) => ({
  students: state.students.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add,
  update,
  remove,
  fetchAll,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Students);
