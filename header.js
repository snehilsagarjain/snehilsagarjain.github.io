import React, {useRef} from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import "./hp.css";
//import Home from "./home";
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
//import React from 'react';
import { Slide } from 'react-slideshow-image'; 
import 'react-slideshow-image/dist/styles.css';
{/* , Slideshowref */}
//var back() { this.slideRef.current.goBack(); }
//var next() { this.slideRef.current.goNext(); }

class Header extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = { current: 0 };
  }
  back() { this.slideRef.current.goBack(); }
  next() { this.slideRef.current.goNext(); }

  render() {
    const properties = {
      duration: 5000, autoplay: true, transitionDuration: 500,
      arrows  : true, infinite: true, easing            : "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    ];
    return (
        <div>
            < div className = "header" >
                < div className = "inner-header" >
                    < div className = "space" > < /div>    
                    < div className = "middle" >
                        < div className = "f1" > Sagar Fashions 
                            < span className = "store-style" > Store </span>  
                        </div > 
                        < div className = "f2" > </div>      
                        < button className = "cart-button" >
                            <img src = "data:image/png;base64,
                            iVBORw0KGgoAAAANSUhEUgAAAJsAAAB8CAMAAABJ / jKEAAAAbFBMVEX /
                            //8jJygAAACRk5IYHR6YmZr8/fxpamoHDxGJiorZ2trh4uL6+
                            vobICGUlpUPFBZxc3Pq6 + vz9PTR09K3uLjKy8p7fX1aXV6xsrLAwcFT VVYWGx8LFhMACgpPUFKho6RFSkorLy85OzxAQ0To7mcfAAADn0lEQVR 4 nO2aXXOqMBCGIcYAQhoDKKhVBP //fzwJUEENnlZ2gYs80+lN7fjOZn
                            ezH3Eci8VisVgsFovFYrFMBnOi8BHJ5tbUwpzNkTzy7cm5VbXEZ + o + 4 V / iuVU1pORZmuuKnbOIcy38V23 + 19 yqGhKD3fh1blUtHqG8oxFHFnGk inzrdZSNtt3cou5EjLGoxtmLOhgW4nCP5LX7UW8ph9onrLXxainpt4M 58 a0OB5LMLcVE43DUC15ZPfPVsjaTQxs / r7W5VPTwP8QNYbUl4jUXf4 rIIlhxcNJUTAEbznupS5ajLT / DSTsCF1sJnN1EAFxryRuH0kYOoMoUW zDD + cBhqqpNQ0X3ETQDVqaaGyhtfgGsTakDkua6CJeyB3M18BtCu1bA ZDixh5fm7GACFT6DKGQJow2lPs0gDEehi5CGNYTDiTWGNGcHkeEIzuB CVhBXKk6rFgHUcNRDkaYcbnz2PedI2gAcrtwgaYtGawMveTsuYx1Olb xYfI3NcCgXVsNohyN4I + OwGicNLYMoWDYu + wr4krcjMIyo / 2 I3zDnUO IfjN5QapEWOuhkIRsl7hx0 / dzhKbphjT + as / mw4ToUvKC + rSyBx9zqH3 2 rjStOZEOJevaDId6E2GcMdZcv / 3 lpa01m4t6MXrNNExhOO1oeyr7aT 8 LWhsn2RJhuJGZIDPGc4zk9CK6qO26A4JLMO + Q8 / GY7rYTQt9dkVh00Y z2CnZ8LW4WilNe0WoemHOFvwFiSos4i / mluHiWZbzrMlrt1kEwxVyCK9 xHxl6B + RM29N20Fnnomt + jGTT2HoZu2m8j + lnKqUS08aeqKa5vcd / Yc Wkk3whCP //uWV+sQZs+ht2XwmzRVbfG3s+lkN5+P1ph35R4U5R20WW
                            phTUPJ3eIovTdeu8cPrs817koaFPLRaAFGSpsn7MkTu0gPwIvdXpBdX CPf6ZtgXf1Vc0DLDmrkNsiJ1KuFkP3RRylsT0PQ8RRj0WN8TCRnIW3F 278 nEpI + sZC9zUfOZ9Z4egq9M38Ae3hUOPO / qXx9kyoDY93po81Qt6t 9 sBGs8 / gpztqeetqMpGB66bDJBDXIn6NvNXGA82G3KSM37 / mY2Sn9t iLOYHCAuO7Nw8xcfujgViHNe0zffDTe4Bgp + xNEynPbVck6ENh0ddvMo IzpiuO9O + 75 VmWGzrwgpt + 8 qxtRzyfc1mGMsIUM98nvXkEbqI / Gbj1g sFovFYrFYLBaLZRr + AWdJN0pucJ / aAAAAAElFTkSuQmCC "
                            alt = "cart icon"
                            className = "image" / >
                            <div className = "incno" > < /div>      
                            <span className = "cart" > Cart < /span>         
                        </button > 
                    </div>  
                    <div className = "space" > < /div>   
                </div > 
            </div > 
            <div className="slide-container">
            <Slide ref={this.slideRef} {...properties}>
                    {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                        <img className="lazy" src={each} alt="sample" />
                    </div>
                    ))}
          </Slide>
        </div>
        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
        
      </div>
    );
  }
}

{/*
const Header = () => {
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = { current: 0 };
    back() { this.slideRef.current.goBack(); }
    next() { this.slideRef.current.goNext(); }
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '800px'
    }
    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
    ];
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        easing: "ease",
        indicators: (i) => <div className="indicator">{i + 1}</div>,
        onChange: (oldIndex, newIndex) => {
           console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
      
    //const slideRef = useRef<Slideshowref>(null);
    //const slideRef = React.createRef();
    //var back = this.back.bind(this);
    //var next = this.next.bind(this);
   // var state = { current: 0 };
    return ( 
        <div>
            < div className = "header" >
                < div className = "inner-header" >
                    < div className = "space" > < /div>    
                    < div className = "middle" >
                        < div className = "f1" > Sagar Fashions 
                            < span className = "store-style" > Store </span>  
                        </div > 
                        < div className = "f2" > </div>      
                        < button className = "cart-button" >
                            <img src = "data:image/png;base64,
                            iVBORw0KGgoAAAANSUhEUgAAAJsAAAB8CAMAAABJ / jKEAAAAbFBMVEX /
                            //8jJygAAACRk5IYHR6YmZr8/fxpamoHDxGJiorZ2trh4uL6+
                            vobICGUlpUPFBZxc3Pq6 + vz9PTR09K3uLjKy8p7fX1aXV6xsrLAwcFT VVYWGx8LFhMACgpPUFKho6RFSkorLy85OzxAQ0To7mcfAAADn0lEQVR 4 nO2aXXOqMBCGIcYAQhoDKKhVBP //fzwJUEENnlZ2gYs80+lN7fjOZn
                            ezH3Eci8VisVgsFovFYrFMBnOi8BHJ5tbUwpzNkTzy7cm5VbXEZ + o + 4 V / iuVU1pORZmuuKnbOIcy38V23 + 19 yqGhKD3fh1blUtHqG8oxFHFnGk inzrdZSNtt3cou5EjLGoxtmLOhgW4nCP5LX7UW8ph9onrLXxainpt4M 58 a0OB5LMLcVE43DUC15ZPfPVsjaTQxs / r7W5VPTwP8QNYbUl4jUXf4 rIIlhxcNJUTAEbznupS5ajLT / DSTsCF1sJnN1EAFxryRuH0kYOoMoUW zDD + cBhqqpNQ0X3ETQDVqaaGyhtfgGsTakDkua6CJeyB3M18BtCu1bA ZDixh5fm7GACFT6DKGQJow2lPs0gDEehi5CGNYTDiTWGNGcHkeEIzuB CVhBXKk6rFgHUcNRDkaYcbnz2PedI2gAcrtwgaYtGawMveTsuYx1Olb xYfI3NcCgXVsNohyN4I + OwGicNLYMoWDYu + wr4krcjMIyo / 2 I3zDnUO IfjN5QapEWOuhkIRsl7hx0 / dzhKbphjT + as / mw4ToUvKC + rSyBx9zqH3 2 rjStOZEOJevaDId6E2GcMdZcv / 3 lpa01m4t6MXrNNExhOO1oeyr7aT 8 LWhsn2RJhuJGZIDPGc4zk9CK6qO26A4JLMO + Q8 / GY7rYTQt9dkVh00Y z2CnZ8LW4WilNe0WoemHOFvwFiSos4i / mluHiWZbzrMlrt1kEwxVyCK9 xHxl6B + RM29N20Fnnomt + jGTT2HoZu2m8j + lnKqUS08aeqKa5vcd / Yc Wkk3whCP //uWV+sQZs+ht2XwmzRVbfG3s+lkN5+P1ph35R4U5R20WW
                            phTUPJ3eIovTdeu8cPrs817koaFPLRaAFGSpsn7MkTu0gPwIvdXpBdX CPf6ZtgXf1Vc0DLDmrkNsiJ1KuFkP3RRylsT0PQ8RRj0WN8TCRnIW3F 278 nEpI + sZC9zUfOZ9Z4egq9M38Ae3hUOPO / qXx9kyoDY93po81Qt6t 9 sBGs8 / gpztqeetqMpGB66bDJBDXIn6NvNXGA82G3KSM37 / mY2Sn9t iLOYHCAuO7Nw8xcfujgViHNe0zffDTe4Bgp + xNEynPbVck6ENh0ddvMo IzpiuO9O + 75 VmWGzrwgpt + 8 qxtRzyfc1mGMsIUM98nvXkEbqI / Gbj1g sFovFYrFYLBaLZRr + AWdJN0pucJ / aAAAAAElFTkSuQmCC "
                            alt = "cart icon"
                            className = "image" / >
                            <div className = "incno" > < /div>      
                            <span className = "cart" > Cart < /span>         
                        </button > 
                    </div>  
                    <div className = "space" > < /div>   
                </div > 
            </div > 
            {/*</div><div className="slide-container">*//*}
            <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
            {/*<div className = "slideshow-container">
                <Slide ref={//slideRef} {...properties} > 
                {/*indicators={true}                 ref={{ current: '[Circular]' }}*//*}
                    {//slideImages.map((slideImage, index)=> (
                        /*<div key={index}>*//*
                            <div style={{ ...//divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div>
                        /*</div>*//*
                    ))} 
                </Slide>
            </div>*//*}
            {/*
                {/*let slideIndex = 1; 
                showSlides(slideIndex);
                function showSlides(n) {
                    let i;
                    let slides = document.getElementsByClassName("mySlides");
                    console.log("slides.length ="+slides.length);
                    let dots = document.getElementsByClassName("dot");
                    if (n > slides.length)              { slideIndex = 1                                                      }    
                    if (n < 1)                          { slideIndex              = slides.length                             }
                    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none";                                   }
                    for (i = 0; i < dots.length; i++)   { dots[i].className       = dots[i].className.replace(" active", ""); }
                    console.log("slideIndex ="+slideIndex);
                    //console.log("")
                    //console.log("slides["+slideIndex-1+"] ="+ slides[slideIndex]);
                    slides[slideIndex-1].style.display = "block";  
                    dots[slideIndex-1].className += " active";
                }
                function plusSlides(n)   { showSlides(slideIndex += n); }
                function currentSlide(n) { showSlides(slideIndex  = n); }*//*}
                                {/*<span style={spanStyle}>{slideImage.caption}</span>*//*}
                            
                <div className = "slideshow-container">
                    <div className = "mySlides fade" >{/*banner-outer *//*}
                        <img src = "https://img.freepik.com/free-vector/e-commerce-banners-collection_1284-19367.jpg?w=740&t=st=1673882265~exp=1673882865~hmac=1d5f14f05449e38474d564a1533e0b0a295590951f59d2240f98e908501ea617"
                        alt = "E-commerce banner"
                        className = "banner"
                        height = "40%"
                        width = "40%" / >
                    </div>
                    <div class="mySlides fade">
                        <img src = "https://img.freepik.com/free-vector/worldwide-e-commerce-concept_23-2147657845.jpg"
                            alt = "E-commerce banner"
                            className = "banner"
                            height = "40%"
                            width = "40%" / >
                    </div>
                    <div class="mySlides fade">
                        <img src = "https://png.pngtree.com/png-clipart/20200406/ourmid/pngtree-business-concept-of-online-shopping-e-commerce-png-image_2174632.jpg"
                            alt = "E-commerce banner"
                            className = "banner"
                            height = "40%"
                            width = "40%" / >
                    </div>
                    <NavLink to ={"."} className="prev"> {/*square border border-primary border-3 *//*}
                                        <button className="cl" onclick={plusSlides(-1)}> ❮ </button>                       </NavLink>
                    <NavLink to ={"."} className="next"> {/*square border border-primary border-3 *//*}
                                        <button className="cl" onclick={plusSlides(1)}> ❯ </button>                       </NavLink>
                    {/*</div><a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>*//*}
                </div>
                <div className = "dots">
                    <span class="dot" onclick={currentSlide(1)}></span> 
                    <span class="dot" onclick={currentSlide(2)}></span> 
                    <span class="dot" onclick={currentSlide(3)}></span> 
                </div>*//*
            }
        </div>            
    );
}*/}
export default Header;