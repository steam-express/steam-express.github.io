import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import { CardActionArea } from '@mui/material';

import styles from '../../styles/courses.module.css';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:1337/api/courses');
    const data = await res.json();

    console.log(data);
  
    return {
      props: { courses: data }
    }
}

const Courses = ({ courses }) => {
    return (
        <>
            <Head>
                <title>All Courses | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <div className="screen">
                <h1>All Courses</h1>
                <Grid container
                    spacing={2}
                    className="courseGrid"
                    alignItems="center"
                    justifyContent="center"
                >
                    {courses.data.map(course => (
                        <Grid item>
                            <Card key={"card_" + course.id} variant="outlined" className={styles.courseCard}>
                                <CardActionArea href={`/courses/${course.id}`} key={course.id}>
                                    <CardMedia
                                        component="img"
                                        alt={course.attributes.Title}
                                        height="140"
                                        image={course.attributes.ImageUrl}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {course.attributes.Title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Courses;