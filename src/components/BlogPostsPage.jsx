import Header from './Header';
import Footer from './Footer';
import BlogPost from './BlogPost';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function BlogPostsPage(){

    const [posts, setPosts] = useState([]);

    /*
    const posts = [
        {
            id: 1,
            title: "My First Blog Post",
            content: "This is my first React blog post. Welcome to my blog! I hope you all enjoy reading the content that I post on here!",
            author: "John Doe",
            date: "2023-10-01"
        }, 
        {
            id: 2,
            title: "My Second Blog Post",
            content: "This is my fifth React blog post. Welcome to my second blog! I hope you all enjoy reading the content that I post on here whenever I can!",
            author: "Jane Doe",
            date: "2023-11-02"
        }, 
        {
            id: 3,
            title: "My Third Blog Post",
            content: "This is my third React blog post.",
            author: "Aurther Dane",
            date: "2025-12-12"
        }
    ];
    */


    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setPosts(res.data))
        .catch((e) => console.log(e));
    }, []);

    return(
        <>
          <div className="blog-page">
        <Header/>

        {posts.map(post => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              {post.title}
            </Link>
          }
          content={post.body.substring(0, 100) + "..."}
          author={`User ${post.userId}`}
          date={"N/A"}
        />
      ))}
        <Footer/>
         </div>
        </>
    );
}

export default BlogPostsPage