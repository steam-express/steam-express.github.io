import React from 'react';
import Link from 'next/link';
import Image from 'next/image';   

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <h1>STEAM Express</h1>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/courses"><a>Courses</a></Link>
            <Link href="/teachers"><a>Teachers</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    );
}

export default Navbar;