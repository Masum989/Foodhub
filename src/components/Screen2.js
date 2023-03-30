import React,{useState} from 'react';
import {Link} from 'react-router-dom';


function Screen2() {
  const[state,setState] = useState(0);

   const add=()=>{
      setState(state+1);
   }
   const remove=()=>{
    if(state>=1)
    setState(state-1);
    else
    setState(state);
   }

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
            <button onClick={add} className="increment">+</button>
            <button onClick={remove} className="decrement">-</button>
        </div>
        <div className='col-md-4' style={{boxShadow:"2px whitesmoke"}}>
        <img src="https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/coke.jpeg" width="250px" height="150px" alt='burger'/>
             <h3>Coke</h3>
            <h6>Price:100</h6>
            <button onClick={add}  className="increment">+</button>
            <button onClick={remove} className="decrement" >-</button>
        </div>
        <div className='col-md-4'>
        <img src='https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/fries.jpeg' width="250px" height="150px" alt='burger'/>
            <h3>Fries</h3>
            <h6>Price:50</h6>
            <button onClick={add} className="increment">+</button>
            <button onClick={remove} className="decrement">-</button>
            
        </div>
        <div className='col-md-4 my-5'>
             <img src='https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/pepsi.jpeg' width="250px" height="150px" alt='burger'/>
            <h3>Pepsi</h3>
            <h6>Price:50</h6>
            <button onClick={add} className="increment">+</button>
            <button onClick={remove} className="decrement">-</button>
        </div>
    </div>
    </>
  )
}

export default Screen2