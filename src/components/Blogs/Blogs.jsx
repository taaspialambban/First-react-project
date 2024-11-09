import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmarks , handleMarkAsRead}) => {
    const[blogs, setBlogs] = useState([]);

  useEffect(() =>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs :{blogs.length}</h2>
            {
              blogs.map(blog => <Blog 
                key={blog.id}
                 blog={blog}
                 handleAddToBookmarks={handleAddToBookmarks}
                 handleMarkAsRead = {handleMarkAsRead}
                 ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
  handleAddToBookmarks : PropTypes.func,
  handleMarkAsRead : PropTypes.func
}

export default Blogs;