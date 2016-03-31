import React, { PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import '../../styles/main.css';
import FlatButton from 'material-ui/lib/flat-button';

const tableSettings = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: true,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  displayRowCheckbox: false,
  adjustForCheckbox: false,
  displaySelectAll: false,
  height: '400',
};

function JobsTableData(props) {
  return (
    <div>
      <h2>Jobs</h2>
      <div className="jobType">
        <FlatButton label="New" disabled />
        <FlatButton label="Pending" primary />
        <FlatButton label="Closed" primary />
      </div>
      <Table
        height={props.jobs.length > 6 ? tableSettings.height : undefined}
        fixedHeader={tableSettings.fixedHeader}
        fixedFooter={tableSettings.fixedFooter}
        selectable={tableSettings.selectable}
        multiSelectable={tableSettings.multiSelectable}
        // TODO: see comment above handleRowClick in DashboardContainer.js
        onCellClick={props.onRowClick}
      >
        <TableHeader
          adjustForCheckbox={tableSettings.adjustForCheckbox}
          displaySelectAll={tableSettings.displaySelectAll}
        >
          <TableRow
            displayRowCheckbox={tableSettings.displayRowCheckbox}
          >
          <TableHeaderColumn>Company</TableHeaderColumn>
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={tableSettings.showRowHover}
          stripedRows={tableSettings.stripedRows}
          displayRowCheckbox={tableSettings.displayRowCheckbox}
        >
          {props.jobs.map((job, index) => {
            return (
              <TableRow
                key={index}
                // TODO: see comment above handleRowClick in DashboardContainer.js
                onRowClick={props.onRowClick}
              >
              <TableRowColumn>{job.company}</TableRowColumn>
                <TableRowColumn>{job.title}</TableRowColumn>
                <TableRowColumn>{job.type}</TableRowColumn>
                <TableRowColumn>{job.location}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

JobsTableData.propTypes = {
  jobs: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default JobsTableData;
