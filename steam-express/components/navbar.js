import React from 'react';
import Link from 'next/link';
import Image from 'next/image';   
import Button from "@mui/material/Button";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/steam-express-logo.svg" width = "60" height = "60"/>
                </Link>
                    {/* <h1>STEAM Express</h1> */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/courses"><a>Courses</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            {/* <Link href="/teachers"><a>Teachers</a></Link> */}
            <Link href="/about"><a>About</a></Link>
            <Link href="/trial"><Button className="trialBtn">Book a Trial</Button></Link>
        </nav>
    );
}

export default Navbar;