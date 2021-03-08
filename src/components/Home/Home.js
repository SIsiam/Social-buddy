import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(respo => respo.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h2>This Is Home : {post.length}</h2>

            {
                post.map(post => <Post post={post} />)
            }
        </div>
    );
};

export default Home;