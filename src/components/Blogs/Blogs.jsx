import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = (props) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3 ml-2">
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    {...props}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;