import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { courses: data }
    }
}

const Courses = ({ courses }) => {
    return (
        <div>
            <h1>All Courses</h1>
            {courses.map(course => (
                <Card key={course.id} variant="outlined">
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="140"
                        image={course.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {course.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {course.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={`/courses/${course.id}`} key={course.id}>
                            <Button size="small" color="primary">Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default Courses;