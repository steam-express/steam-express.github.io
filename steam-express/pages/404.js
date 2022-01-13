import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => { router.push('/'); }, 3000);
    })
    
    return ( 
        <div className="notfound">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Please go back to <Link href="/"><a>homepage</a></Link>.</p>
        </div>
     );
}
 
export default NotFound;