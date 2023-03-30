import React from 'react'
import Navbar from './Navbar';
import{Link} from 'react-router-dom';

function Ordersummary() {
  return (
    <>
    <Navbar />
    <div className='checkout' style={{height:"300px"}}>
        <div> <h4>Order Summary</h4></div>
       
        <p>Cock:2 <span style={{paddingLeft:"90px"}}>
            <button  className="increment">+</button>
        <button className="decrement">-</button></span>
        
        </p>
        <p>Fries:1 <span style={{paddingLeft:"90px"}}>
            <button className="increment">+</button>
        <button className="decrement">-</button></span></p>
        <Link to ="/checkout">
        <button style={{backgroundColor:"blue",color:"white",marginLeft:"40px",border:"none"}}>Save and checkout</button>
        </Link>
       <Link to ="/menu"> <button style={{marginLeft:"20px",border:"none"}}>Cancel</button></Link>
       
    </div></>
    
  )
}

export default Ordersummary