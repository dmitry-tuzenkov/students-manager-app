import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const styles = theme => ({
});

const normalizeName = (student) => `${student.first} ${student.last}`;

export class GradeForm extends React.Component {

  state = {
    studentName: '',
    profession: '',
    grade: '',
    completedAt: new Date().toLocaleDateString(),
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  submit = () => {
    const { createOrUpdate, students } = this.props;

    createOrUpdate({
      student_name: this.state.studentName,
      profession: this.state.profession,
      grade: this.state.grade,
      completed_at: this.state.completedAt,
    });

    this.setState({
      studentName: normalizeName(students[0]),
      profession: '',
      grade: '',
      completedAt: new Date().toLocaleDateString(),
    });
  }


  render() {
    const { isCreate, students } = this.props

    return (
      <div>

        <FormControl>
          <InputLabel htmlFor="component-simple"> Student </InputLabel>
          <Select
            value={this.state.studentName}
            onChange={this.handleChange('studentName')}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            { students.map(s => (
              <MenuItem key={s.id} value={normalizeName(s)}>
                {normalizeName(s)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-simple"> Profession </InputLabel>
          <Input id="component-simple" value={this.state.profession} onChange={this.handleChange('profession')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-simple"> Grade </InputLabel>
          <Input id="component-simple" value={this.state.grade} onChange={this.handleChange('grade')} />
        </FormControl>

        <Button onClick={this.submit}> {isCreate ? 'Add' : 'Update'} grade </Button>

      </div>
    );
  }
};

GradeForm.propTypes = {
  isCreate: PropTypes.bool,
  students: PropTypes.array.isRequired,
  createOrUpdate: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(GradeForm);
