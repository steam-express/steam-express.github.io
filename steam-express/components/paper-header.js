import React from 'react';
import Paper from '@mui/material/Paper';

const PaperHeader = (props) => {
    return (
        <Paper
        style={{  
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          className="paperContainer"
        >
            { props.children }
        </Paper>
    )
}

export default PaperHeader;