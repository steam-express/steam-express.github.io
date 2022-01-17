import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/api/teachers');
    const data = await res.json();

    const paths = data.data.map(course => {
        return { params: { teacherid: course.id.toString() } };
    })

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.teacherid;
    const res = await fetch(`http://localhost:1337/api/teachers/${id}`);
    const data = await res.json();

    console.log(data);
    return { props: { teacher: data.data } };
}

const TeacherDetails = ({ teacher }) => {
    return ( 
        <>
            <Head>
                <title>{teacher.attributes.Name} | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <div>
                {/* <Image src={course.attributes.image} alt={course.attributes.Title} width={400} height={400} /> */}
                <h1>{teacher.attributes.Name}</h1>
                <h3>{teacher.attributes.position}</h3>
                <p>{teacher.attributes.Description}</p>
            </div>
        </>
     );
}
 
export default TeacherDetails;