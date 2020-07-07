import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFeching() {

    const [post, SetPost] = useState({});
    const [id, SetId] = useState(1);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            SetPost(res.data);

            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={e => SetId(e.target.value)}/>
            <ul>
                {/* {
                    posts.map(post => 
                        <li key={post.id}>
                                {post.title}
                        </li>
                    )
                } */}


                {
                    post.title
                }
            </ul>
        </div>
    )
}

export default DataFeching
