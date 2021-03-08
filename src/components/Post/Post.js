import React from 'react';
import { useHistory } from "react-router";

const Post = (props) => {
    // distructure 
    const { id, title, } = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`
        history.push(url)
    }
    return (
        <div>
            <h3> <strong>id : {id} </strong>  {title}</h3>
            <button onClick={() => showComments(id)}>Show Comment</button>
        </div>
    );
};

export default Post;