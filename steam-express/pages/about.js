import React from 'react';
import Head from 'next/head';
import PaperHeader from '../components/paper-header';

const About = () => {
    return ( 
        <>
            <Head>
                <title>About Us | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <main>
                <PaperHeader image="https://res.cloudinary.com/steam-express/image/upload/v1642249126/sample.jpg">
                    <h1 className="title">About Us</h1>
                </PaperHeader>
            </main>
        </>
     );
}
 
export default About;