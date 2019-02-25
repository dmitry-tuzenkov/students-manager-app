import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


export class DataTable extends React.Component {
  render() {
    const { fields, rows, actions } = this.props;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              {fields.map(name => (
                <TableCell key={name}> {name} </TableCell>
              ))}
              <TableCell> actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>

                {fields.map(name => (
                  <TableCell key={name}> {row[name]} </TableCell>
                ))}

                <TableCell>
                  <IconButton onClick={() => actions.editAction(row)}>  <EditIcon />  </IconButton>
                  <IconButton onClick={() => actions.deleteAction(row)}>  <DeleteSweepIcon />  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
};

DataTable.propTypes = {
  fields: PropTypes.array.isRequired,
  rows: PropTypes.array,
  actions: PropTypes.shape({
    editAction: PropTypes.func,
    deleteAction: PropTypes.func,
  })
};

export default DataTable;
