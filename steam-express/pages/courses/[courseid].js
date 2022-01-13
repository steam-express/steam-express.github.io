import React from 'react';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(course => {
        return { params: { id: course.id.toString() } };
    })

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return { props: { course: data } };
}

const CourseDetails = ({ course }) => {
    return ( 
        <>
            <Head>
                <title>{course.title} | STEAM Express</title>
            </Head>
            <div>
                <h1>Course</h1>
                <p>{ course.description }</p>
            </div>
        </>
     );
}
 
export default CourseDetails;