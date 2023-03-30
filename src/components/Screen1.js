import React from 'react'
import {Link} from "react-router-dom"
import "../App.css";
import Navbar from './Navbar';
function Screen1() {
  return (
    <>
    <Navbar />
     <div className='heroSection'>
             <h6> Welcome to Food's <br/>Kitchen</h6>
          <Link to ="/menu"><button className='menu'>Go to menu</button></Link> 
     </div>
     </>
  )
}

export default Screen1