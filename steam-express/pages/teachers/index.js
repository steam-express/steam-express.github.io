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
    const res = await fetch('http://localhost:1337/api/teachers');
    const data = await res.json();

    console.log(data);
  
    return {
      props: { teachers: data }
    }
}

const Courses = ({ teachers }) => {
    return (
        <div>
            <h1>All Courses</h1>
            {teachers.data.map(teacher => (
                <Card key={teacher.id} variant="outlined">
                    <CardActionArea href={`/teachers/${teacher.id}`} key={teacher.id}>
                        <CardMedia
                            component="img"
                            alt={teacher.attributes.Name}
                            height="140"
                            image={teacher.attributes.Image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {teacher.attributes.Name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {teacher.attributes.Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default Courses;