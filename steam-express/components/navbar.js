import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';   
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material';
import IconContext from 'react-icons';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [showBurger, setShowBurger] = useState(false);

    const toggleBurger = () => {
        setShowBurger(!showBurger);
    }

    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            }
        }
    });
    const mobileVersion = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <>        
            <nav>
                <div className="logo">
                    <Link href="/">
                        <Image src="/steam-express-logo.svg" width = "60" height = "60"/>
                    </Link>
                        {/* <h1>STEAM Express</h1> */}
                </div>

                {mobileVersion ? (
                    <Button onClick={() => setShowBurger(!showBurger)}>
                        <GiHamburgerMenu />
                    </Button>
                ) : (
                    <>
                        {/* <Link href="/"><a>Home</a></Link> */}
                        <Link href="/courses"><a>Courses</a></Link>
                        <Link href="/contact"><a>Contact Us</a></Link>
                        {/* <Link href="/teachers"><a>Teachers</a></Link> */}
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/trial"><Button className="trialBtn">Book a Trial</Button></Link>
                    </>
                )}
            </nav>

            {mobileVersion ? (
                <div style={{display: showBurger ? 'flex' : 'none'}} className="BurgerContainer">
                {/* <Link href="/">
                    <div className="BurgerItem" onClick={() => setShowBurger(false)}>
                        <p>
                            <a>Home</a>
                        </p>
                    </div>
                </Link> */}
                <Link href="/courses">
                    <div className="BurgerItem" onClick={() => setShowBurger(false)}>
                        <p>
                            <a>Courses</a>
                        </p>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className="BurgerItem" onClick={() => setShowBurger(false)}>
                        <p>
                            <a>Contact Us</a>
                        </p>
                    </div>
                </Link>
                {/* <Link href="/teachers">
                    <a>Teachers</a>
                </Link> */}
                <Link href="/about">
                    <div className="BurgerItem" onClick={() => setShowBurger(false)}>
                        <p>
                            <a>About</a>
                        </p>
                    </div>
                </Link>
                <Link href="/trial">
                    <div className="BurgerTrial" onClick={() => setShowBurger(false)}>
                        <p>
                            <a color="#fafafa">Book a Trial</a>
                        </p>
                    </div>
                </Link>
            </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Navbar;