import React,{useState} from 'react';
import GetData from './GetData';
import AddStaff from './AddStaff'
import './App.css';

function Mainpage() {

    var [task,setTask]=useState('Add')

  function Add() {
    setTask('Add');
  }

  function Get() {
    setTask('Get');
  }
  
  return (
    <div>
 
        <div className="buttons">
                  <input type="submit" className="button1" onClick={Add} value="Add Data" />
                  <button className="button1" onClick={Get} > Show Data</button>


        </div>
        <div>
            {
                task=='Get'?<GetData/>:<AddStaff/>
            }
        </div>

    </div>
    
  );
}

export default Mainpage;