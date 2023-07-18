import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [data,setData] = useState([])

 const getData = async ()=>{
  try {
    let data = await fetch(`https://team-backend-947y.onrender.com/getdata`)
     let response = await data.json();
     console.log(response);
     setData(response)
  } catch (error) {
     console.log(error)
     alert(error);
  }
 }

  return (
    <div className="App">
   <Button onClick={()=>{getData()}} variant="contained">Get Data</Button>

    </div>
  );
}

export default App;
