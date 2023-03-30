import React from 'react'
import Navbar from './Navbar';
import Screen2 from './Screen2';
import{Link} from 'react-router-dom';

function Ordersummary({state1,state2,state3,state4}) {
  return (
    <>
    <Navbar />
    <div className='checkout' style={{height:"350px"}}>
        <div style={{paddingBottom:"5px"}}> <h4>Order Summary</h4></div>
       
        {/* <p>Humburger:2 <span style={{paddingLeft:"80px"}}>
        <button  className="increment">+</button>
        <button className="decrement">-</button></span>
        </p> */}
        <p>Fries:{state1} <span style={{paddingLeft:"95px"}}>
            <button className="increment">+</button>
        <button className="decrement">-</button></span></p>
        <p>Cock: {state2} <span style={{paddingLeft:"90px"}}>
            <button className="increment">+</button>
        <button className="decrement">-</button></span></p>
        <p>Pepsi: {state3}<span style={{paddingLeft:"90px"}}>
            <button className="increment">+</button>
        <button className="decrement">-</button></span></p>
        <p>Humburger: <span style={{paddingLeft:"50px"}}>
        <button  className="increment">+</button>
        <button className="decrement">-</button></span>
        </p>
        <Link to ="/checkout">
        <button style={{backgroundColor:"blue",color:"white",marginLeft:"40px",border:"none"}}>Save and checkout</button>
        </Link>
       <Link to ="/menu"> <button style={{marginLeft:"20px",border:"none"}}>Cancel</button></Link>
       
    </div></>
    
  )
}

export default Ordersummary