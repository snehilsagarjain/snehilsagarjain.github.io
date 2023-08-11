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

// ------------X---------------X-----------------

//import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
//import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
//import CartPage from './pages/cart';
//import ProductPage from './pages/product';
//import LoginPage from './pages/login';
//import HomePage from './pages/home';
//import Header from './Components/header';
//import './App.css';
import Header from './header.js';
import Hp from './hp.js';
import Footer from "./footer.js"
import './hp.css';
import Filter2 from "./filter2.js";
import { useState, useEffect, useRef, useMemo } from "react";
//import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./data";
import Productdescriptionpage from "./productdescriptionpage";
//import "./hp.css";
//import {onCateChange} from "./hp";
import Category from "./category";
//import Home from './home';
//import { useParams } from "react-router";
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
function App() {
  /*var title = [], //newArray = [],
  category = [], image = [],
  len = 0, 
  len1,
  count = 0, count1 = 0,
  previ,
  last, last1,
  myStyle;*/
var checkedState = [];
/*var cat1 = "men's clothing";
var cat2 = "jewellery";
var cat3 = "electronics"; */
var i = 0;
//var j = -1;
const [data, setData] = useState([]);
//const [cate, updateCate] = useState("none");
const [times, setTimes] = useState(0);
const useMemoRef = useRef(0); console.log("useMemoRef ="+useMemoRef);
const incrementUseMemoRef = () => useMemoRef.current++;
const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]); console.log("memoizedValue ="+memoizedValue);
//const [checkedState, setCheckedState] = useState(newArray.fill(false));
checkedState[i] = true;
const { id } = useParams();
//let { id } = useParams(); 
console.log("id-->"+id);
//setData(dummyData);
useEffect(() => {
  //setLoading(true);
  const timer = setTimeout(() => {
      setData(dummyData);
      //console.log("videos = " + videos)
      //console.log("set");
      //setLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);
  return ( 
    <Router>
      
    < div className = "gridContainer" > 
      {/*    <div>I have div</div>
          <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NqyeEO" data-user="vkanet" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid red; margin: 1em 0; padding: 1em;">
        <span>See the Pen <a href="https://codepen.io/vkanet/pen/NqyeEO"> Prism Effect Slider</a> 
              by victor (<a href="https://codepen.io/vkanet">@vkanet</a>) on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <Helmet>
        <script src="https://cpwebassets.codepen.io/assets/embed/ei.js" type="text/javascript"></script>
      </Helmet>
    */}

    {/* async */}
    {<Header />}
    
      <div className = "content">        {console.log("data ="+data)}
        <Filter2 data = {data} times = {times} />
        <div className = "listing">
          <ul className = "listing-list" id="lists">
            
              <Routes>
                <Route path = "/"              element = {<Hp data = {data} />}> </Route>
                <Route path = "/category/none" element = {<Hp data = {data} />}> </Route>
                <Route path = "/:id"
                  element = {<Category data = {data}  memoizedValue = {memoizedValue}/>}></Route>
      
                <Route path = "/category/none/Productdescriptionpage" 
                  element = {<Productdescriptionpage/>}> </Route>
                <Route path = "/category/men's clothing/Productdescriptionpage" 
                  element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/jewellery/Productdescriptionpage" 
                  element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/electronics/Productdescriptionpage" 
                  element = {<Productdescriptionpage/>}></Route>
                <Route path = "/category/women's clothing/Productdescriptionpage" 
                  element = {<Productdescriptionpage/>}></Route>
              </Routes>
            </ul>
          </div>
        </div>
        <Footer />
    
    </div>
  
    </Router>
);
}

export default App;
    {/*
    {/*<Route path = "/category/none" element = {    <Home/>}> </Route>*///}
  /*<Category data = {data} newcate = {"men's clothing"  } memoizedValue = {memoizedValue}/>*/
/*<Category data = {data} newcate = {"jewellery"       } memoizedValue = {memoizedValue}/>*/
/*<Category data = {data} newcate = {"electronics"     } memoizedValue = {memoizedValue}/>*/
/*<Category data = {data} newcate = {"women's clothing"} memoizedValue = {memoizedValue}/>*/
/*<Hp data = {data} />
                
            {/*<hp/>*///}
              //{
                /*newcate = {"men's clothing"  }*///}
                //{
                  /*<Route path = "/category/men's clothing" //:id
                    element = {<Category data = {data} newcate = {"men's clothing"  } memoizedValue = {memoizedValue}/>}></Route>
                    <Route path = "/category/jewellery" 
                    element = {<Category data = {data} newcate = {"jewellery"       } memoizedValue = {memoizedValue}/>}></Route>
                    <Route path = "/category/electronics" 
                    element = {<Category data = {data} newcate = {"electronics"     } memoizedValue = {memoizedValue}/>}></Route>
                    <Route path = "/category/women's clothing" 
                    element = {<Category data = {data} newcate = {"women's clothing"} memoizedValue = {memoizedValue}/>}></Route>
                *//*}
    <Router> 
        <Wp />
        { console.log("1) router") } <Header /> { console.log("2) router") }
        
      <div className="page-container">
        <Routes>
          <Route path= "/" element={<HomePage  /> }>{ console.log("14) router") }</Route>
          <Route exact path="/cart"               element={<CartPage  /> }>{ console.log(" 5) router") }</Route>
          <Route exact path="/product/:productId" element={<ProductPage/>}>{ console.log(" 8) router") }</Route>
          <Route exact path="/login"              element={<LoginPage /> }>{ console.log("11) router") }</Route>
          {/*<Route       path= "/"                  component={HomePage   }>{ console.log("14) router") }</Route>*///}
          //{/*<Route path= "*" element={<HomePage  /> }>{ console.log("14) router") }</Route>*/}
        /*</Routes>         
      </div>
        </Router>*/}