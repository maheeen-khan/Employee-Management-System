import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';


function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('#1002', 'Wade Warren', <span style={
    {color: 'rgb(255, 0, 0)', border: '1px solid rgb(255, 0, 0)', padding: '2px 4px', borderRadius: '4px', fontSize: '12px',alignContent:'center'}
  }>Pending</span>, '$24', <EditNoteOutlinedIcon/>, 3.99),

  createData('#1003', 'Wade Warren',  <span style={
    {color: 'rgb(18, 176, 52)', border: '1px solid rgb(18, 176, 52)', padding: '2px 4px', borderRadius: '4px', fontSize: '12px',alignContent:'center'}
  }>Success</span>, '$37', <EditNoteOutlinedIcon/>, 4.99),

  createData('#1004', 'Wade Warren',  <span style={
    {color: 'rgb(255, 0, 0)', border: '1px solid rgb(255, 0, 0)', padding: '2px 4px', borderRadius: '4px', fontSize: '12px',alignContent:'center'}
  }>Pending</span>, '$24', <EditNoteOutlinedIcon/>, 3.79),

  createData('#1005', 'Wade Warren', <span style={
    {color: 'rgb(18, 176, 52)', border: '1px solid rgb(18, 176, 52)', padding: '2px 4px', borderRadius: '4px', fontSize: '12px',alignContent:'center'}
  }>Success</span>, '$67', <EditNoteOutlinedIcon/>, 2.5),

  createData('#1006', 'Wade Warren', <span style={
    {color: 'rgb(18, 176, 52)', border: '1px solid rgb(18, 176, 52)', padding: '2px 4px', borderRadius: '4px', fontSize: '12px',alignContent:'center'}
  }>Success</span>, '$49', <EditNoteOutlinedIcon/>, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor:'rgb(234, 234, 234)'}}>
            <TableCell />
            <TableCell style={{color:'rgb(104, 103, 103)'}}>Order #</TableCell>
            <TableCell align="right" style={{color:'rgb(104, 103, 103)'}}>Customer</TableCell>
            <TableCell align="right" style={{color:'rgb(104, 103, 103)'}}>Payment</TableCell>
            <TableCell align="right" style={{color:'rgb(104, 103, 103)'}}>Total</TableCell>
            <TableCell align="right" style={{color:'rgb(104, 103, 103)'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
