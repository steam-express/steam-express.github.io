import React from "react";
import Button from "@mui/material/Button";
import Head from "next/head";

const Trial = () => {
    return ( 
        <>
            <Head>
                <title>Book a Trial | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <div className="screen">
                <h1>Book a Trial</h1>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shraSO7fXYNdSqRit?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
            </div>
        </>
     );
}
 
export default Trial;