/*
import React, { useState, useEffect } from "react";
import dummyData from "./data";
import "./homepage.css";
import Productdescriptionpage from "./productdescriptionpage";
const Homepage = () => {
        const [videos, setVideos] = useState([]);
        const [toggled, setToggled] = useState(true);
        const handleClick = () => {
            setToggled(!toggled);
        };

        const render = () => {
            if (toggled) {
                return <Hello / > ;
            }

            return <Bye / > ;
        };
        //const [loading, setLoading] = useState(false);
        //const [last, setLast] = useState("");
        //const [count, setCount] = useState(0);
        var category = [],
            len = 0,
            count = 0,
            last;
        //var elem;
        useEffect(() => {
            //setLoading(true);
            const timer = setTimeout(() => {
                setVideos(dummyData);
                //console.log("videos = " + videos)
                //console.log("set");
                //setLoading(false);
            }, 5000);
            return () => clearTimeout(timer);
        }, []);

        return ( <
            div className = "grid-container" >
            <
            div className = "grid-item" >
            <
            div className = "category" > {
                videos.map((list, index) => {
                    //setCount(0);
                    count = 0;
                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                    if (category.length === 0) {
                        category.push(list.category);
                        //console.log("push");
                        //console.log("category.length = " + category.length)
                        len = category.length - 1;
                        //console.log("len=" + len);
                        //console.log("category[len]=" + category[len]);
                        last = category[len];
                        //console.log("last=" + last); //setLast(elem);
                    } else {
                        //console.log("else");
                        for (let x of category) {
                            // or		for(let x = 0; x < category.length; x++){
                            //                            category.forEach(element => {
                            if (x === list.category) {
                                //  if (element === list.category) { 
                                //  therefore, for of method recommended for array
                                //						Break; 
                                //console.log("else1");
                                return null;
                            } else { //setCount(count + 1);
                                count = count + 1;
                                //console.log("count = " + count);
                            }
                            //                            });
                        }
                        if (count === category.length) {
                            category.push(list.category);
                            //console.log("push(1)");
                            //console.log("category.length(1) = " + category.length)
                            len = category.length - 1;
                            //console.log("len(1)=" + len);
                            //console.log("category[len](1)=" + category[len]);
                            last = category[len];
                            //console.log("last(1)=" + last);
                            //setLast(elem);   
                        }
                    }
                    //category[category.length – 1] 
                    //                                category.forEach(e => {
                    // });}</div> --- )}
                    return ( <
                        div key = { index } > { last } < /div > 
                    );
                })
            } <
            /div> <
            div className = "butt" > {
                category.map((element, index) => {
                        return ( <
                            div >
                            <
                            button key = { index }
                            onClick = {
                                () => {
                                    alert("Hello");
                                    console.log("index = " + index);
                                    videos.map((list, i) => {
                                            if (list.category === category[index]) {
                                                var id = list.id;
                                                var title = list.title;
                                                var price = list.price;
                                                var description = list.description;
                                                //var category = list.category; 
                                                var image = list.image;
                                                var rating = list.rating;
                                            } else { return null; }
                                            return (
                                                /*<
                                                Productdescriptionpage id = { id }
                                                title = { title }
                                                price = { price }
                                                description = { description }
                           
                                                image = { image }
                                                rating = { rating }
                                                /> );
                                                /*<
                                                Productdescriptionpage ii = { id }
                                                title = { title }
                                                price = { price }
                                                description = { description }
                                                category = { category[index] }
                                                image = { image }
                                                rating = { rating }
                                                />*/

/*})
//productdescriptionpage(element) 
}
} > { "Buy Now" } < /button> <br/ >
<
/div>
);
})
} <
/div >   < /
div >

    <
    div >
    <
    img src = "https://img.freepik.com/free-vector/e-commerce-banners-collection_1284-19367.jpg?w=740&t=st=1673882265~exp=1673882865~hmac=1d5f14f05449e38474d564a1533e0b0a295590951f59d2240f98e908501ea617"
alt = "E-commerce banner"
className = "banner"
height = "40%"
width = "40%" / >
    <
    /div> 

<
/div >

);
};
const Hello = () => {
    return <h2 > hello < /h2>;
};

const Bye = () => {
    return <h2 > bye < /h2>;
};

export default Homepage; 
*/