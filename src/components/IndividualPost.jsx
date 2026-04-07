import React from "react";
import '../App.css'; 
import Header from './Header';
import Footer from './Footer';
import BlogPost from './BlogPost';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Icons from './Icons';

function IndividualPost(){
    return(
        <div>
            <Header/>
            <BlogPost
            title="My First Blog Post"
            content="This is my first React blog post. Welcome to my blog! 
            I hope you all enjoy reading the content that I post on here!"
            author="John Doe"
            date="2023-10-01"/>
            <Icons/>
            <CommentBox/>
            <CommentList/>  
            <Footer/>
        </div>

    )
}

export default IndividualPost