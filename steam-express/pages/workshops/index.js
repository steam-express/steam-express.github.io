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
import PaperHeader from '../../components/paper-header';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:1337/api/workshops');
    const data = await res.json();

    console.log(data);
  
    return {
      props: { workshops: data }
    }
}

const Workshops = ({ workshops }) => {
    return (
        <>
            <Head>
                <title>All Workshops | STEAM Express</title>
                <link rel="icon" href="/steam-express-logo.ico" />
            </Head>
            <main className="screen">
                <PaperHeader image="https://res.cloudinary.com/steam-express/image/upload/v1642249126/sample.jpg">
                    <h1 className="title">All Workshops</h1>
                </PaperHeader>
                <Grid container
                    spacing={2}
                    className="courseGrid"
                    alignItems="center"
                    justifyContent="center"
                >
                    {workshops.data.map(workshop => (
                        <Grid item>
                            <Card key={"card_" + workshop.id} variant="outlined" className={styles.courseCard}>
                                <CardActionArea href={`/workshops/${workshop.id}`} key={workshop.id}>
                                    <CardMedia
                                        component="img"
                                        alt={workshop.attributes.Title}
                                        height="140"
                                        image={workshop.attributes.ImageUrl}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {workshop.attributes.Title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </>
    );
}

export default Workshops;