import { useEffect } from "react";

const HomePage = () => {

    useEffect(() => {
        console.log('Sto "montando" il componente HomePage.');

        return () => { console.log('Sto "smontando" il componente HomePage.') }

    }, [])


    return <>
        <h1>HOMEPAGE</h1>
        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</article>
        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</article>
    </>
};

export default HomePage;