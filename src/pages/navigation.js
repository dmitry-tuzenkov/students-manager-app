import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link } from "react-router-dom";

export class Navigation extends React.Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit">
            {this.props.pageName}
          </Typography>

          <Button component={Link} to="/students" color="inherit"> Students </Button>
          <Button component={Link} to="/grades" color="inherit"> Grades </Button>

          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

        </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default Navigation;
