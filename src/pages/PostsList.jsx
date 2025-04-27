import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostsList = () => {

    // useState
    const [posts, setPosts] = useState([]);

    // chiamata axios
    function getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
    };

    // useEffect
    useEffect(() => {
        console.log('Sto "montando" il componente PostsList.');

        return () => { console.log('Sto "smontando" il componente PostsList.') }

    }, (getPosts, []))

    // return
    return <>
        <div>
            <h1>Lista prodotti</h1>
            <div>
                {posts.map((posts) => (
                    <div key={posts.id}>
                        <h4>{posts.title}</h4>
                        <article>{posts.body}</article>
                        <Link to={`/posts/:${id}`}>Visualizza il prodotto</Link>
                    </div>
                ))}

            </div>

        </div>

    </>
}

export default PostsList;