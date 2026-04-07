

function CommentsList({ comments }) {

  if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
  }

    return (
      <ul className="comments-list">
        {comments.map((c) => (
          <li key={c.id}>
            <p><b>{c.name}</b></p>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default CommentsList;