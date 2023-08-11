//import "./homepage.css";
import React from "react";

function Productdescriptionpage({
    id,
    title,
    price,
    description,
    category,
    image,
    rating
}) { //now accessing details here like: props.id, etc.
    //const productdescriptionpage = ({ a }) => {
    /*
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [last, setLast] = useState("");
    //const [count, setCount] = useState(0);
    var category = [],
        len = 0,
        count = 0,
        last;
    //var elem;
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setVideos(dummyData);
            //console.log("videos = " + videos)
            //console.log("set");
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
*/
    return (console.log("Pro-return"),
        /*<
               div className = "grid-container" >
               <
               div className = "details" >*/
        <
        div >
        <
        div className = "label" > { id } {console.log("123"+id+"123")} </div>   
        <div className = "label" > { title } < /div> <
        div className = "label" > { price } < /div> <
        div className = "label" > { description } < /div> <
        div className = "label" > { image } < /div> <
        div className = "label" > { rating } < /div> < /
        div >
        /*<
               /div>  < /
               div >*/
    );
    //};
}
export default Productdescriptionpage;