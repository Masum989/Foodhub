// import logo from './logo.svg';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

import './App.css';
import Checkout from './components/Checkout';
import Ordersummary from './components/Ordersummary';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

function App() {

  return (
     <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/menu" element={<Screen2 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Ordersummary />} />
       </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;
