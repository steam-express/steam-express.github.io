import React from "react";
import Head from "next/head";
import { Container } from "@mui/material";

const Contact = () => {
    return ( 
        <>
            <Head>
                <title>Contact Us | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <div className="screen">
                <h1>Contact Us</h1>

                <p><a href="mailto:steamexpress.hk@gmail.com">Email: steamexpress.hk@gmail.com</a></p>
                <p><a href="https://wa.me/85251164998">Whatsapp: 5116 4998</a></p>
                <p><a href="https://www.facebook.com/steamexpress.hk/">Facebook: STEAM Express</a></p>
                <p><a href="https://www.instagram.com/steamexpress.hk/">Instagram: STEAM Express</a></p>
                <p><a>Address: Rm F, 7/F, Ting Sun Plaza, No. 33 Sheung Heung Rd, To Gua Wan</a></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.68345495644223!2d114.18972984293089!3d22.318287331529536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040132ca048729%3A0x3805eee3b0d06dc0!2s463%20Laboratory!5e0!3m2!1sen!2shk!4v1642254095185!5m2!1sen!2shk" width="500" height="375" allowfullscreen="" loading="lazy"></iframe>

                
            </div>
        </>
     );
}
 
export default Contact;