import { useEffect } from "react";


const PostsList = () => {
    useEffect(() => {
        console.log('Sto "montando" il componente PostsList.');

        return () => { console.log('Sto "smontando" il componente PostsList.') }

    }, [])


    return <>
        <h1>Lista prodotti</h1>
        <div>
            <article>Prodotto 1</article>
            <article>Prodotto 2</article>
            <article>Prodotto 3</article>
            <article>Prodotto 4</article>
            <article>Prodotto 5</article>
            <article>Prodotto 6</article>
            <article>Prodotto 7</article>
            <article>Prodotto 8</article>
            <article>Prodotto 9</article>
            <article>Prodotto 10</article>
        </div>
    </>
}

export default PostsList;