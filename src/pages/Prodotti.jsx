import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Prodotti = () => {

    // useState
    const [posts, setPosts] = useState({});
    // useParams
    const { id } = useParams();

    // chiamata axios
    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => (setPosts(res.data)))
    };

    // useEffect
    useEffect(() => {
        console.log('Sto "montando" il componente Prodotti.');

        return () => { console.log('Sto "smontando" il componente Prodotti.') }

    }, (getPosts, []));

    // return
    return <>
        <div key={posts.id}>
            <h4>{posts.title}</h4>
            <article>{posts.body}</article>
        </div>
    </>

}

export default Prodotti;