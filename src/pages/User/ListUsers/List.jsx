import './list.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import  BdTable from "../../AdminPage/BdTableUsers/BdTable"
import Sidebar from '../../AdminPage/Sidebar/Sidebar';
import Topbar from '../../AdminPage/Topbar/Topbar';

export default function list(){

  return (
   <>
      <Topbar/>
        <div className='listContainer'>
          <Sidebar/>
          <BdTable/>
       </div>
    </>
  )
}