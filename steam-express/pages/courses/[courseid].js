import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/api/courses');
    const data = await res.json();

    const paths = data.data.map(course => {
        return { params: { courseid: course.id.toString() } };
    })

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.courseid;
    const res = await fetch(`http://localhost:1337/api/courses/${id}`);
    const data = await res.json();

    console.log(data);
    return { props: { course: data.data } };
}

const CourseDetails = ({ course }) => {
    return ( 
        <>
            <Head>
                <title>{course.attributes.Title} | STEAM Express</title>
            </Head>
            <div>
                {/* <Image src={course.attributes.image} alt={course.attributes.Title} width={400} height={400} /> */}
                <h1>{course.attributes.Title}</h1>
                <h3>Introduction</h3>
                <p>{course.attributes.Introduction}</p>
                <h3>Learning Objectives</h3>
                <p>{course.attributes.LearningObjectives}</p>
            </div>
        </>
     );
}
 
export default CourseDetails;