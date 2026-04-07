
import Icons from './Icons';

function BlogPost(props){

    return(
        <div className={`card post-${props.id}`}>
            <h2 className="blog-title">{props.title}</h2>
            <p className="blog_content">{props.content}</p>
            <p className="blog_author"><b>Author:</b> {props.author}</p>
            <p className="blog_date"><b>Date:</b> {props.date}</p>
        </div>
        
    );

}

export default BlogPost;