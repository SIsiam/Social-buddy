import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [slug])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [slug])
    return (
        <div>
            <h2>This is Post Details {slug} </h2>
            <p>post : {post.body} </p>
            <h4>Comment : {comment.length}</h4>

            {
                comment.map(cmt => <Comment comment={cmt} />)
            }
        </div>
    );
};

export default PostDetails;