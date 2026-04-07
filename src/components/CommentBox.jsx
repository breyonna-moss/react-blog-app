
function CommentBox(){

    return(
        <>
        <h2 className="comments">Comments</h2>
        <textarea className="comment_box" cols="60" rows="6" placeholder="Write a comment..."></textarea>
        <button className="submit_btn" type="submit">Submit</button>
        </>
    );
}

export default CommentBox