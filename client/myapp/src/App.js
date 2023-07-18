import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRef } from 'react';

function App() {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false);

   

  // Getting the Data by Calling the Api
 const getData = async ()=>{
   setIsLoading(true);
  try {
    let data = await fetch(`http://localhost:8080/getdata`)
    let response = await data.json();
    console.log(response);
    // handleClick()
    setData(response)
  } catch (error) {
    console.log(error)
    alert(error);
  }
  setIsLoading(false);
 }

//  Styling for Table Component
 const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



  return (
    <div className="App">
   <Button className='button' onClick={()=>{getData()}} variant="contained">Get Data</Button>
   <br/>
   <br/>
   {isLoading ? <p>Data is Loading</p>:""}
   <TableContainer style={{width:"90%",margin:"auto",textAlign:"center"}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.no</StyledTableCell>
            <StyledTableCell>team_name</StyledTableCell>
            <StyledTableCell align="center">full_name</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
            <StyledTableCell align="center">number</StyledTableCell>
            <StyledTableCell align="center">city</StyledTableCell>
            <StyledTableCell align="center">url</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data?.map((row,i) => (
            <StyledTableRow key={i+1}>
              <StyledTableCell align="center">{i+1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.team_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.full_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.url}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
