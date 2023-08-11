import React, { useState, useEffect } from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./data";
import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
import { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router";
{/*        myLists.map((myList) => <li>{myList}</li>);
        return(<div><h2>React Map</h2> <ul>{listItems}</ul></div>);*/}
const Category = (props) => { //{data}, newcate
    var title = [], //newArray = [],
        category = [], image = [],
        len = 0, 
        len1,
        count = 0, count1 = 0,
        previ,
        last, last1,
        myStyle;
    var pa = "./Productdescriptionpage";
    var checkedState = [];
    var i = 0, j = -1;
    {/*
    const [data, setData] = useState([]);
    const [cate, updateCate] = useState("none");
    //const [checkedState, setCheckedState] = useState(newArray.fill(false));
    checkedState[i] = true;
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

    function start(){
        <ul className = "listings-list" id = "lists" >
        {
                data.map((list, index) => { console.log("newcatmap");
                //if (newcate === "none"){
                
                    //console.log("map");
                    /* setCount(0); */// count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                  /*  if (image.length === 0) { 
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else {
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    <input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }
                                    backgroundimage = "url({last})" /> {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                <div className = "buy" > 
                                { 
                                    <div > 
                                        {/*list.id *//*}
                                        <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
     /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                category = { category[index] } image = { image } rating = { rating } /> */ /*
                                                })
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                } 
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ 
                         //   }
            /*})   
         
        }
        </ul>
        //console.log("start");
    }

    function NameList(arg){ 
        //return <h2>I am a { props.arg }!</h2>;
        //const myLists = props.mylists; 
        console.log("NameList");
        image.length = 0;
        title.length = 0;
        const newcat = arg;
        console.log("newcat="+newcat);
        //<ul className = "listings-list" id = "lists" >
        {
            data.map((list, index) => { console.log("arg="+arg);
                //if (newcate === "none"){
                if(list.category === arg){
                    //console.log("map");
                    /* setCount(0); */ //count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                  /*  if (image.length === 0) { 
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else {
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    {
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    }
                    
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    {/*<input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }/>
                                    {/*backgroundimage = "url({last})" /> *//*}
                                    {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                
                                <div className = "buy" > 
                                {/*{ 
                                    <div > 
                                        //{/*list.id */ //}
                                    /*    <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
                                                        /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                                            category = { category[index] } image = { image } rating = { rating } /> */ 
                                     /*           })
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                    } *//*
                                }
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    {/* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ /* }
                            }
            })    
        }
        {/*</ul>*//*}

        {
        /*
        const listItems = 
            data.map((list, index)=>{
                if(list.category === newcat){ 
                    return(
                        '<li key = {'+index+'}>'+ 
                            '<div className = "listings-list-item">'+
                                '<div>'+
                                    '<input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+list.title+'} />'+
                                    '<label htmlFor = { `custom-checkbox-${'+ index +'}` } > {'+list.title+'} </label>'+
                                '</div>'+
                                '<div className = "buy" > <button key = {'+index+'} onClick = "click()"> Buy Now < /button> </div > <br/>'+
                            '</div>'+ 
                        '</li>'
                    );
                }
                else{ return null; }
            }).join('');
        console.log("listitems = "+listItems);
        
        return({listItems});
        *//*
        }
    }

    function click(e){
        alert("hello world");
        var Title = e.target.value;
        var inhtml;
        document.querySelector('#lists').innerHTML= 
        data.map((list) => { 
            if (list.title === Title) { 
                inhtml = '<div className = "label"> ' + Title +' </div> <div className = "label"> '+ list.price +' </div> <div className = "label"> '+ list.description +' </div> <div className = "label"> '+ list.category +' </div> <div className = "label"> '+ list.image +' </div>';
            } 
            else { inhtml = null; }       
            return inhtml;       
        }).join('');
    }
    { /*           //index, i
                //var rating = list.rating;
                //<div className = "label"> { id }          </div>
                //<div className = "label"> { rating }      </div>    
                //<Productdescriptionpage id = { id } title = { list.title } price = { price } description = { description } category = { category } image = { image } rating = { rating } /> 
      *//*
    }

    //handleOnChange for category
    function onCateChange(e) {
        var ee = document.querySelector('#lists');
        
        //e.firstElementChild can be used.
        var child = ee.lastElementChild; 
        while (child) {
            ee.removeChild(child);
            child = ee.lastElementChild;
        }
        let li = document.createElement('li')
        li.textContent = 'yes'
        ee.appendChild(li);
        console.log("yes li added")
        child = ee.lastElementChild; 
        ee.removeChild(child);
        /*        let newDog = document.createElement('ul')
                newDog.classList.add('listings-list')
                newDog.setAttribute("id","lists");
                console.log("new dynamic add")
                let li = document.createElement('li')
         //       li.setAttribute("key",index);
                li.textContent = 'yes'
                newDog.appendChild(li);
                return(                document.querySelector('#lists').appendChild(newDog) );
        */
       /*
        const newcate = e.target.value; 
        console.log("newcate1="+newcate)
        updateCate(newcate);
        console.log("newcate = "+newcate);
        if(newcate === "none"){         console.log("newcate1 = "+newcate);
            //document.querySelector('#lists').innerHTML= start();
            document.querySelector('#lists').innerHTML=            data.map((list, index) => { console.log("newcatmap");
                //if (newcate === "none"){
                
                    //console.log("map");
                    /* setCount(0); */  //count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                   /* if (image.length === 0) { 
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else {
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    <input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }
                                    backgroundimage = "url({last})" /> {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                <div className = "buy" > 
                                { 
                                    <div > 
                                        {/*list.id *//*}
                                        <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
     /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                category = { category[index] } image = { image } rating = { rating } /> */ 
                                               /* })
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                } 
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ 
                         //   }
            /*})   
            { /*            data.map((list, index) => { 
                //if (newcate === "none"){
                //if(list.category === newcate){
                    //console.log("map");
                    /* setCount(0); */
                    // count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
        /*
                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else {
                        for (let x of image) { if (x === list.image) { return null; } else { count = count + 1; } }
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; }
                    }

                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { if (x === list.title) { return null; } else { count1 = count1 + 1; } }
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1=title[len]; }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    return ( 
                        '<ul><li key = { index }>'+
                            '<div className = "listings-list-item">'+
                                '<div style = {'+ myStyle +'} > <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+ last1 +'} backgroundimage = "url({'+last+'})" /> <label htmlFor = { `custom-checkbox-${'+index+'}` } > {'+ last1 +'} </label> </div >'+ 
                                '<div className = "buy" > { <div > <button key = {'+ index +'} value = {'+last1+'} onClick = {'+ click(this) +'} > { "Buy Now" } < /button> <br/ > </div> } </div>'+
                            '</div>'+
                        '</li></ul>'
                    ); 
            }).join('');
                    /*list.id */
                    /* {<img src = { last } alt = "images" width = "60px" height = "60px" / >} */ 
                    /*< /div >*//*
                    }
        }
        else{ console.log("NEW_ELSE");
        //const myElement = <NameList arg= "newcate"/>;
            document.querySelector('.listing').innerHTML= NameList(newcate);
            <div dangerouslySetInnerHTML={{__html: data}} />
            {/*start();*//*}
            console.log("New2")
            {
            /*
            data.map((list, index) => {
                if(list.category === newcate){ 
                    myStyle = { backgroundimage: "url(list.image)" }
                    return( '<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title + ' </label> < /div > <div className = "buy" > <button key = {' + index + '} onClick = "' + click + '"> Buy Now < /button> </div > <br/> < /div > < /li>');
 //                    return('<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title     + ' </label> < /div > <div                   > <button key = {' + index + '}                            >{"buynow"}< /button> </div > <br/> < /div > < /li>') ; //}).join('');

                    // wizard
                    // style = {' + myStyle + '} 
                    // backgroundimage = "url({' + list.image + '})" 

                    //return '<li> <div> <button> buy now </button> </div> </li>';
                }
                else{ return null; }
            }).join('');*/
            //document.getElementById("lists").innerHTML += data.map((list, index) => { return "<div>123</div>"; }).join('');
            /*
            data.map((list, index) => { 
                console.log("data"); 
                if(list.category === newcate){ 
                    console.log("list"); count = 0; count1 = 0; 
                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else { 
                        for (let x of image) { 
                            if (x === list.image) { return null; } 
                            else { count = count + 1; } 
                        } 
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    } 
                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { return null; } 
                            else { count1 = count1 + 1; } 
                        } 
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                        myStyle = { backgroundimage: "url(last)" } 
                    } 
                    return ( <li key = { index } > <div className = "listings-list-item" > <div style = { myStyle } ><input type = "radio" className = "form-check-input" id = { `custom-checkbox-${index}` } name = "title" value = { last1 } backgroundimage = "url({last})" /> <label htmlFor = { `custom-checkbox-${index}` } > { last1 } </label> < /div > <div className = "buy" > { <div > <button key = { index } onClick = { () => { alert("Hello"); data.map((list, i) => { if (list.category === title[index]) { var id = list.id; var price = list.price; var description = list.description; var category = list.category; var image = list.image; var rating = list.rating; } else { return null; } return ( <Productdescriptionpage id = { id } title = { list.title } price = { price } description = { description } category = { category } image = { image } rating = { rating } /> ); }) }} > { "Buy Now" } < /button> <br/ ></div> } </div > < /div > < /li> ); 
                }
            }).join('');*//*}
        }
    }                    
    
    //similar to category, all rest filters, etc


    //const [total, setTotal] = useState(0);
    //const [isChecked, setIsChecked] = useState(false);
    //const handleOnChange = () => { setIsChecked(!isChecked); };

    *///}
    }
    image.length = 0;
    title.length = 0;
    //console.log("{id} ="+{id}); //categorynewcate: props.newcate
    //const newvar = {id}; //props.newcate    
    //console.log("id ="+{id}); //newvar: newvar
    //const renderCount = useRef(0);
    let { id } = useParams(); console.log("idnew-->"+id);
    return( 
        <> 
        {     
        props.data.map((list, index) => { 
            console.log("id="+id)
            //console.log("arg="+props.newcate);
                //if (newcate === "none"){
                    //console.log("list.category ="+list.category);
                if(list.category === id){ //props.newcate
                 {    //console.log("map");
                    /* setCount(0); */ count = 0; count1 = 0;
                    console.log("count count1");
                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                 }
                 console.log("ccccccccc");
                    if (image.length === 0) { console.log("imglen0");
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else { 
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; console.log("count ="+count) }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; console.log("count1 ="+count1) }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    {
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    }
                    {/*
                        var ee = document.querySelector('#lists');
        
        //e.firstElementChild can be used.
        var child = ee.lastElementChild; 
        while (child) {
            ee.removeChild(child);
            child = ee.lastElementChild;
        }*/
                    }
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    {/*<input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }/>
                                    {/*backgroundimage = "url({last})" /> */}
                                    {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                
                                <div className = "buy" > 
                                    <Link to ={pa}> <button >{"BUY"}</button> </Link>

                                                        {/*onClick={handleClick2} </a>*//*}
                                {/*{ 
                                    <div > 
                                        //{/*list.id */ //}
                                    /*    <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
                                                        /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                                            category = { category[index] } image = { image } rating = { rating } /> */ 
                                     /*           })
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                    } */
                                }
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    {/* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ }
                }
                //else{ console.log("categoryifelse"); }
        })
    }
    </>
    );

}
export default Category; 

    //map: returns set twice
    //cat select effect -- advance
    //cat select print -- id, etc.. --- examine.

    {/*console.log("{newcate123} ="+props.newcate)}        {console.log("arg123="+ props.newcate)
        <p> This is {props.memoizedValue} </p> */}