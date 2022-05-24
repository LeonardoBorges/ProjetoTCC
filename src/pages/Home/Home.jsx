import './home.css';
import {react} from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../AdminPage/Sidebar/Sidebar';
import Topbar from '../AdminPage/Topbar/Topbar';


export const Home = () => {
  let navigate = useNavigate();
  return(
      <div className='home'>
       <Topbar/>
        <div className='homeContainer'>
        <Sidebar/>

        </div>
      </div>

  )
}

export default Home;