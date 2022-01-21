import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@mui/material';

import styles from '../../styles/course-details.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/api/workshops');
    const data = await res.json();

    const paths = data.data.map(workshop => {
        return { params: { workshopid: workshop.id.toString() } };
    })

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.workshopid;
    const res = await fetch(`http://localhost:1337/api/workshops/${id}`);
    const data = await res.json();

    console.log(data);
    return { props: { workshop: data.data } };
}

const workshopDetails = ({ workshop }) => {
    return ( 
        <>
            <Head>
                <title>{workshop.attributes.Title} | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <div className="screen">
                <div className="main-content">
                    <Container maxWidth="sm" className={styles.bannerImg}>
                        <img src={workshop.attributes.ImageUrl} alt={workshop.attributes.Title} width={800} height={400}  />
                    </Container>
                    <h1>{workshop.attributes.Title}</h1>
                    <h3>Introduction</h3>
                    <p>{workshop.attributes.Introduction}</p>
                    <h3>Learning Objectives</h3>
                    <p>{workshop.attributes.LearningObjectives}</p>
                    <h3>Course Outline</h3>
                    <p>{workshop.attributes.Syllabus}</p>
                </div>
            </div>
        </>
     );
}
 
export default workshopDetails;