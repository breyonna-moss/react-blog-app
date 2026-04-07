import Header from './Header';
import Footer from './Footer';
import Icons from './Icons';
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

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

  
  function IndividualPostPage() {

    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [_error, setError] = useState(null);
    const [_commentError, setCommentError] = useState(null);
    const [_loading, setLoading] = useState(true);


    const { id } = useParams();
    

    useEffect(() => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          setPost(res.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setError("Failed to load post. Please try again later.");
          setLoading(false);
        });
    }, [id]);

    useEffect(() => {
      if (post && post.userId) {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => setUser(res.data))
          .catch((e) => console.log(e));
      }
    }, [post]);

    useEffect(() => {
      if (!id) return;
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => setComments(res.data))
        .catch((e) => {
          console.log(e);
          setError("Failed to load comments.");
        });
    }, [id]);
  
    if (!post) return <h2 className='not-found'>Loading...</h2>;

    const addComment = (commentData) => {
      const { name, body } = commentData;
      const newComment = {
        name,
        body
      };
      setComments(prev => [...prev, newComment]);
      setCommentError(null);
    };
  
    return (
      <>
      <div className='blog-page'>
        <Header/>
        <div className='post-card'>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-content">{post.body}</p>
            {user && (
              <>
                <p className="post-author"><b>Author:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
              </>
          )}
        </div>
        <Icons/>

        <div className='comment-section'>
          <h3 className="comm-header">Comments</h3>
          <div className='comm-list'><CommentsList comments={comments} /></div>
          <div className='comm-form'><CommentForm addComment={addComment} /></div>
        </div>
        <Footer/>
        </div>
      </>
      
    );
}

export default IndividualPostPage;