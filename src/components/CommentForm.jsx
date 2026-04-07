import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

function CommentForm({ addComment }) {
  const { postId } = useParams();
  const [commentData, setCommentData] = useState({ name: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentData.name.trim() || !commentData.text.trim()) {
      alert("Please fill in all fields");
      return;
    }
    axios
    .post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      name: commentData.name,
      body: commentData.text})
    .then((res) => {
      addComment(res.data);
      setCommentData({ name: "", text: "" });
    })
    .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="comment-form">
        <input
          className="your-name-form"
          type="text"
          name="name"
          placeholder="Your Name"
          value={commentData.name}
          onChange={handleChange}
          required
        />
        <textarea
          className="your-comment-form"
          name="text"
          placeholder="Your Comment"
          value={commentData.text}
          onChange={handleChange}
          required
        />
        <button className="submit_btn" type="submit">Submit Comment</button>
      </div>
    </form>
  );
}

export default CommentForm;
