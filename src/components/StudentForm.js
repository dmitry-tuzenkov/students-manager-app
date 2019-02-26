import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '@material-ui/core/Button';


const styles = theme => ({
});

export class StudentForm extends React.Component {

  state = {
    first: '',
    last: '',
    birthday: new Date().toLocaleDateString(),
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  submit = () => {
    const { createOrUpdate } = this.props;
    
    createOrUpdate({
      first: this.state.first,
      last: this.state.last,
      birthday: this.state.birthday,
    });
  }

  render() {
    const { isCreate } = this.props

    return (
      <div>

        <FormControl>
          <InputLabel htmlFor="component-simple"> First </InputLabel>
          <Input id="component-simple" value={this.state.first} onChange={this.handleChange('first')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-simple"> Last </InputLabel>
          <Input id="component-simple" value={this.state.last} onChange={this.handleChange('last')} />
        </FormControl>

        <Button onClick={this.submit}> {isCreate ? 'Add' : 'Update'} student </Button>

      </div>
    );
  }
};

StudentForm.propTypes = {
  isCreate: PropTypes.bool,
  createOrUpdate: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(StudentForm);
