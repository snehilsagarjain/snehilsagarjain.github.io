/*
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React, {Component} from 'react';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import Header from './Components/header';
import './App.css';

function App() {
  return (
    <Router> 
        { console.log("1) router") } <Header /> { console.log("2) router") }
        
      <div className="page-container">
        <Routes>
          <Route path= "/" element={<HomePage  /> }>{ console.log("14) router") }</Route>
          <Route exact path="/cart"               element={<CartPage  /> }>{ console.log(" 5) router") }</Route>
          <Route exact path="/product/:productId" element={<ProductPage/>}>{ console.log(" 8) router") }</Route>
          <Route exact path="/login"              element={<LoginPage /> }>{ console.log("11) router") }</Route>
          {/*<Route       path= "/"                  component={HomePage   }>{ console.log("14) router") }</Route>*///}
          //{/*<Route path= "*" element={<HomePage  /> }>{ console.log("14) router") }</Route>*/}
        //</Routes>         
      //</div>
    //</Router>
  //);
//}

//export default App;
/*
import "./App.css";
//import Hp from './hp.js';
import Wp from './wp.js';

const App = () => {
    return ( <
        div className = "App" >
        <Wp />
        { /*<         Hp / > */ //}
        /*<
        /div>
    );
};
export default App;
*/

// -------------X------------------X----------------------

//import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
//import React, {Component} from 'react';
import React from 'react';
//import CartPage from './pages/cart';
//import ProductPage from './pages/product';
//import LoginPage from './pages/login';
//import HomePage from './pages/home';
//import Header from './Components/header';
import './App.css';
//import Wp from './wp.js';
//import Hp from './hp.js';
import './hp.css';
//function App() {
function Footer(){
    return(
    <div className = "footer" >
        <div className = "about"   > About Company   </div>   
        <div className = "contact" > Company Contact </div>    
        <div > </div> 
    </div >
    ); 
}
export default Footer;