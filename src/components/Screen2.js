import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Screen2() {
  const[state1,setState1] = useState(0);
  const[state2,setState2] = useState(0);
  const[state3,setState3] = useState(0);
  const[state4,setState4] = useState(0);
  
   const add1=()=>{
      setState1(state1+1);
   }
   const remove1=()=>{
    if(state1>=1)
    setState1(state1-1);
    else
    setState1(state1);
   }
   const add2=()=>{
    setState2(state2+1);
 }
 const remove2=()=>{
  if(state2>=1)
  setState2(state2-1);
  else
  setState2(state2);
 }
 const add3=()=>{
    setState3(state3+1);
 }
 const remove3=()=>{
  if(state3>=1)
  setState3(state3-1);
  else
  setState3(state3);
 }
 const add4=()=>{
    setState4(state4+1);
 }
 const remove4=()=>{
  if(state4>=1)
  setState4(state4-1);
  else
  setState4(state4);
 }
 const state = state1+state2+state3+state4;

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroud:"#133e75"}} >
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">Food's restaurant</a> */}
      <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
       
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" style={{fontSize:"30px",paddingLeft:"10px"}}>Food's restaurant</a>
          </li>
         </ul>
          
         <div>
        <img className='cart' src='https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png' width="40px" height="35px" style={{background:"blue"}} alt='cart' />
        <Link to="/orders">
        <button style={{marginRight:"50px", backgroundColor:"whitesmoke", borderRadius:"10px"}} type="button">{state}</button>
        </Link>
       </div>
      </div>
       
    </div>
   </nav>

    <div className='row my-5' style={{textAlign:"center",width:"65%",marginLeft:"230px"}}>
        <div className='col-md-4' style={{borderRadius:"4px"}}>
            <img src='https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/burger.jpeg' width="250px" height="150px" alt='burger'/>
            <h3>Humburger</h3>
            <h6>Price:200</h6>
            {state1>0?(
                <div>
                <h6>Total: {state1}</h6>
                <h6>Cost(INR): {state1*200}</h6></div>
            ):""}
            <button onClick={add1} className="increment">+</button>
            <button onClick={remove1} className="decrement">-</button>
        </div>
        <div className='col-md-4' style={{boxShadow:"2px whitesmoke"}}>
        <img src="https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/coke.jpeg" width="250px" height="150px" alt='burger'/>
             <h3>Coke</h3>
            <h6>Price:100</h6>
            {state2>0?(
                <div>
                <h6>Total: {state2}</h6>
                <h6>Cost(INR): {state2*100}</h6></div>
            ):""}
            <button onClick={add2}  className="increment">+</button>
            <button onClick={remove2} className="decrement" >-</button>
        </div>
        <div className='col-md-4'>
        <img src='https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/fries.jpeg' width="250px" height="150px" alt='burger'/>
            <h3>Fries</h3>
            <h6>Price:50</h6>
            {state3>0?(
                <div>
                <h6>Total: {state3}</h6>
                <h6>Cost(INR): {state3*50}</h6></div>
            ):""}
            <button onClick={add3} className="increment">+</button>
            <button onClick={remove3} className="decrement">-</button>
            
        </div>
        <div className='col-md-4 my-5'>
             <img src='https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/pepsi.jpeg' width="250px" height="150px" alt='burger'/>
            <h3>Pepsi</h3>
            <h6>Price:50</h6>
            {state4>0?(
                <div>
                <h6>Total: {state4}</h6>
                <h6>Cost(INR): {state4*50}</h6></div>
            ):""}
            <button onClick={add4} className="increment">+</button>
            <button onClick={remove4} className="decrement">-</button>
        </div>
    </div>
    </>
  )
}

export default Screen2