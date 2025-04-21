import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        console.log('Sto "montando" il componente About.');

        return () => { console.log('Sto "smontando" il componente About.') }

    }, [])


    return <>
        <h1>Chi siamo</h1>
        <div>
            <article>Contatti</article>
            <article>Indirizzi</article>
            <article>Email</article>
            <article>Indirizzo</article>
            <article>Social</article>
        </div>
    </>
};

export default About;