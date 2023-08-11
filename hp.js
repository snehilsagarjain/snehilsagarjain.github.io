import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./data";
import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
//import Category from "./category";

{/*        myLists.map((myList) => <li>{myList}</li>);
        return(<div><h2>React Map</h2> <ul>{listItems}</ul></div>);*/}
const Hp = ({data}) => {
    var title = [], //newArray = [],
        category = [], image = [],
        len = 0, 
        len1,
        count = 0, count1 = 0,
        previ,
        last, last1,
        myStyle;
    var checkedState = [];
    var i = 0, j = -1;
    //const [data, setData] = useState([]);
    const [cate, updateCate] = useState("none");
    //const [checkedState, setCheckedState] = useState(newArray.fill(false));
    checkedState[i] = true;
{/*
    function start(){
        <ul className = "listings-list" id = "lists" >
        {
                data.map((list, index) => { console.log("newcatmap");
                //if (newcate === "none"){
                
                    //console.log("map");
                    /* setCount(0); */ //count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                    /*if (image.length === 0) { 
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
                                             /*   })
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
           /* })   
         
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
                    {/* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*//* }
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
        */
       /* }
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
      */
    /*}

 function filter(){
    return(
        <div className = "filter" >
            <div className = "category" >
                <ul className = "toppings-list" id = "cats" > 
                                    <li key = {j + 1} > 
                                        <div>Visit W3Schools.com!</div>
                                        <div className = "toppings-list-item" > 
                                            <label htmlFor = "none" >
                                                <input type = "radio"
                                                    className = "form-check-input"
                                                    id = "none"
                                                    name = "category"
                                                    value = "none"
                                                    checked = {cate === "none"}
                                                    onChange = { onCateChange } />
                                                "NONE" 
                                            </label>   
                                        </div > 
                                    </li> 
                                    {
                                        data.map((list, index) => { 
                                            /* setCount(0); */ //count = 0; 
                                            //console.log("list = " + JSON.stringify(list));                
                                            //console.log("category.length = " + category.length);                
                                            //console.log("id = " + list.id);
                                            /*if (category.length === 0) {
                                                //category.push(list.category); //console.log("push");   
                                                //console.log("category.length = " + category.length)

                                                //len = category.length - 1; console.log("len=" + len);                    
                                                //console.log("category[len]=" + category[len]);
                                                
                                                //last = category[len]; console.log("last=" + last); setLast(elem);
                                            } else { //console.log("else");
                                            *//*
                                            for (let x of category) { 
                                                if (x === list.category) { return null; } else { count = count + 1; }
                                            }
                                            if (count === category.length) { 
                                                i = i + 1; category.push(list.category); checkedState.push("false");
                                                len = category.length - 1; last = category[len]; previ = i; 
                                            } 
                                            return ( 
                                                <li key = { list.category } > 
                                                    <div className = "toppings-list-item" > 
                                                        <label htmlFor = { `custom-checkbox-${index}` } >
                                                            <input type = "radio"
                                                            className = "form-check-input"
                                                            id = { `custom-checkbox-${index}` }
                                                            name = "category"
                                                            value = { list.category }
                                                            checked = { cate === list.category }
                                                            onChange = { onCateChange } /> 
                                                            { list.category } 
                                                        </label> 
                                                    </div > 
                                                </li>
                                            ); 
                                            
                                            /*
                                                category.push({
                                                    data.map((list, index) => {
                                                        count = 0;
                                                        if ((category.length === 0) || (category.indexOf(list.category) === -1)) {
                                                            return list.category; } 
                                                        else return null;
                                                    })
                                                });
                                                for (var i = 0; i < category.length; i++) {
                                                    if (category[i] == null) { category.splice(i, i); i--; } 
                                                    else { newArray.push("false");
                                                        //return <div ... ><input key = {i} ... ></div> 
                                                        return ( 
                                                            <li key = { index } > 
                                                                < div className = "toppings-list-item" >
                                                                    <input type = "radio"
                                                                    class = "form-check-input"
                                                                    id = { `custom-checkbox-${index}` }
                                                                    name = "category"
                                                                    value = { list.category }
                                                                    checked = { checkedState[index] }
                                                                    onChange = { () => handleOnChange(index) } />  
                                                                    <label htmlFor={`custom-checkbox-${index}`}>{list.category}</label> 
                                                                < /div > 
                                                            < /li>
                                                        );
                                                    }
                                                }
                                            */
                                         /*   
                                        })
                                    } 
                </ul>
                {/*
                                    <div className = "toppings-list-item" > 
                                        <label htmlFor = "none" >
                                            <input type = "radio"
                                            className = "form-check-input"
                                            id = "none"
                                            name = "category"
                                            value = "none"
                                            checked = {cate === "none"}
                                            onChange = { onCateChange } / >
                                            "NONE" 
                                        </label>   
                                    </div > 
                                *//*}
                                </li> 
                                {
                                    //data.map((list, index) => { 
                                        /* setCount(0); */ /*count = 0; 
                                        //console.log("list = " + JSON.stringify(list));                
                                        //console.log("category.length = " + category.length);                
                                        //console.log("id = " + list.id);
                                        /*if (category.length === 0) {
                                            //category.push(list.category); //console.log("push");   
                                            //console.log("category.length = " + category.length)

                                            //len = category.length - 1; console.log("len=" + len);                    
                                            //console.log("category[len]=" + category[len]);
                                            
                                            //last = category[len]; console.log("last=" + last); setLast(elem);
                                        } else { //console.log("else");
                                        *//*
                                        for (let x of category) { 
                                            if (x === list.category) { return null; } else { count = count + 1; }
                                        }
                                        if (count === category.length) { 
                                            i = i + 1; category.push(list.category); checkedState.push("false");
                                            len = category.length - 1; last = category[len]; previ = i; 
                                        } 
                                        return ( 
                                            <li key = { list.category } > 
                                                <div className = "toppings-list-item" > 
                                                    <label htmlFor = { `custom-checkbox-${index}` } >
                                                        <input type = "radio"
                                                        className = "form-check-input"
                                                        id = { `custom-checkbox-${index}` }
                                                        name = "category"
                                                        value = { list.category }
                                                        checked = { cate === list.category }
                                                        onChange = { onCateChange } /> 
                                                        { list.category } 
                                                    </label> 
                                                </div > 
                                            </li>
                                        ); 
                                        
                                        /*
                                            category.push({
                                                data.map((list, index) => {
                                                    count = 0;
                                                    if ((category.length === 0) || (category.indexOf(list.category) === -1)) {
                                                        return list.category; } 
                                                    else return null;
                                                })
                                            });
                                            for (var i = 0; i < category.length; i++) {
                                                if (category[i] == null) { category.splice(i, i); i--; } 
                                                else { newArray.push("false");
                                                    //return <div ... ><input key = {i} ... ></div> 
                                                    return ( 
                                                        <li key = { index } > 
                                                            < div className = "toppings-list-item" >
                                                                <input type = "radio"
                                                                class = "form-check-input"
                                                                id = { `custom-checkbox-${index}` }
                                                                name = "category"
                                                                value = { list.category }
                                                                checked = { checkedState[index] }
                                                                onChange = { () => handleOnChange(index) } />  
                                                                <label htmlFor={`custom-checkbox-${index}`}>{list.category}</label> 
                                                            < /div > 
                                                        < /li>
                                                    );
                                                }
                                            }
                                        */
                                        /*
                                    })
                                } 
                            </ul> *//*
                }
                            {/*</li> </ul>*//*}
                </div >
                <div className = "price" > 
                    <ul> <li type = "radio"> Increasing </li> <li type = "radio"> Decreasing </li> </ul>
                </div >   
            </div > 
    );
 }

  function footer(){
    <div className = "footer" >
        <div className = "about"   > About Company   </div>   
        <div className = "contact" > Company Contact </div>    
        <div > </div> 
    </div > 
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
                 /*   if (image.length === 0) { 
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
           /* })   
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
                    /*< /div >*/
                    /*}
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
    */}
    //similar to category, all rest filters, etc


    //const [total, setTotal] = useState(0);
    //const [isChecked, setIsChecked] = useState(false);
    //const handleOnChange = () => { setIsChecked(!isChecked); };
    image.length = 0;
    title.length = 0;
    return ( 
                        data.map((list, index) => { 
                            //if (newcate === "none"){
                            //if(list.category === newcate){
                                //console.log("map");
                                /* setCount(0); */ count = 0; count1 = 0;

                                //console.log("list = " + JSON.stringify(list));
                                //console.log("category.length = " + category.length);
                                //console.log("id = " + list.id);
                                if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                                else {
                                    for (let x of image) { if (x === list.image) { return null; } else { count = count + 1; } }
                                    if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; }
                                }
            
                                if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                                else { 
                                    for (let x of title) { if (x === list.title) { console.log("title null");return null; } else { count1 = count1 + 1; } }
                                    if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1=title[len]; }
                                    myStyle = { backgroundimage: "url(last)" }
                                }
                                //checked = { checkedState[index] }
                                //onChange = { () => handleOnChange(index) }
                                //return '<li> <div> <button> buy now </button> </div> </li>';
                                
                                return ( 
                                    <li key = { index } >
                                        <div className = "listings-list-item" >
                                        {/* style = { myStyle } className = "bgimg" */}
                                            <div>                                                 {/*<div>*/} 
                                                    <img src= {list.image} id = { `custom-checkbox-${index}` } className = "bgimg"  /> {/*</div>*/}
                                                {/*style="background-image: url({list.image}); "
                                                <input type = "radio"
                                                className = "form-check-input"
                                                id = { `custom-checkbox-${index}` }
                                                name = "title"
                                                value = { last1 }
                                                backgroundimage = "url({last})" />*/}
                                                <div className="listitem">
                                                    <label htmlFor = { `custom-checkbox-${index}` } > { last1 } </label> 
                                                    <div>{list.description}</div>
                                                </div>
                                            </div > 
                                            <div className = "buy" > 
                                            { 
                                                <div > 
                                                    {/*list.id */}
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
                                                            })
                                                                //productdescriptionpage(element) 
                                                        }
                                                    } > 
                                                        { "Buy Now" } 
                                                    < /button> 
                                                    <br/ >
                                                </div>
                                            } 
                                            </div> 
                                        </div> 
                                    </li> 
                                ); 
                                /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ 
                        })    
                    
    );
}
export default Hp; 
{
    //map: returns set twice
    //cat select effect -- advance
    //cat select print -- id, etc.. --- examine.
}
                        {/*}*/} 
                    {/*}*/} 
                    {/*< div className = "gridContainer" >
                        <div className = "content" >
                        {/*filter()
                        <div className = "listing" >
                        <ul className = "listings-list" id = "lists" > */} 
                    {/*
                        </ul>
                        <div className = "title" > {
                            data.map((list, index) => {
                                /*setCount(0);*/ /*count = 0;
                                //console.log("list = " + JSON.stringify(list));
                                //console.log("category.length = " + category.length);
                                //console.log("id = " + list.id);
                                if (title.length === 0) {
                                    title.push(list.title); //console.log("push");
                                    //console.log("category.length = " + category.length)
                                    len = title.length - 1; //console.log("len=" + len);
                                    //console.log("category[len]=" + category[len]);
                                    last = title[len]; //console.log("last=" + last); //setLast(elem); } 
                                else { //console.log("else");
                                    for (let x of title) {
                                        // or		for(let x = 0; x < category.length; x++){
                                        //                            category.forEach(element => {
                                        if (x === list.title) {
                                            //  if (element === list.category) { 
                                            //  therefore, for of method recommended for array
                                            //						Break; 
                                            //console.log("else1");
                                            return null;
                                        } 
                                        else {  //setCount(count + 1);
                                                count = count + 1; //console.log("count = " + count); }
                                        //                            });
                                    }
                                    if (count === title.length) {
                                        title.push(list.title); //console.log("push(1)");
                                        //console.log("category.length(1) = " + category.length)
                                        
                                        len = title.length - 1; //console.log("len(1)=" + len);
                                        //console.log("category[len](1)=" + category[len]);

                                        last = title[len]; //console.log("last(1)=" + last);
                                        //setLast(elem);   
                                    }
                                }
                                //category[category.length – 1] 
                                //                                category.forEach(e => {
                                // });}</div> --- )}
                                return ( < div key = { index } > { last } < /div> ); 
                            })
                        } 
                        </div> 
                    *//*}
                </div > 
            </div > 
            {/*footer()*//*}
        </div >*/ }
