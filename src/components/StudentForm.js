import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const styles = theme => ({
});

export class StudentForm extends React.Component {

  state = {
    first: 'first',
    last: 'last',
    birthday: new Date().toLocaleDateString(),
  }

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  submit() {
    const { createOrUpdate } = this.props;
    createOrUpdate({
      id: null,
      first: this.state.first,
      last: this.state.last,
      birthday: this.state.birthday,
    });
  }

  render() {
    const { isCreate } = this.props

    return (
      <div>
        <Paper>

          <FormControl>
            <InputLabel htmlFor="component-simple"> First </InputLabel>
            <Input id="component-simple" value={this.state.first} onChange={this.handleChange('first')} />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="component-simple"> Last </InputLabel>
            <Input id="component-simple" value={this.state.last} onChange={this.handleChange('last')} />
          </FormControl>

          <Button onClick={this.submit}> {isCreate ? 'Add' : 'Update'} Add student </Button>

        </Paper>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(StudentForm);
