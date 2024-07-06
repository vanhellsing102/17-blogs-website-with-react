
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className="w-3/4">
                {
                    blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;