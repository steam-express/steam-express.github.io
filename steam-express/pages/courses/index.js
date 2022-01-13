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
// import { CardActionArea } from '@mui/material';


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
        <div>
            <h1>All Courses</h1>
            {courses.data.map(course => (
                <Card key={course.id} variant="outlined">
                    <CardActionArea href={`/courses/${course.id}`} key={course.id}>
                        <CardMedia
                            component="img"
                            alt={course.attributes.Title}
                            height="140"
                            image={course.attributes.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {course.attributes.Title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {course.attributes.Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default Courses;