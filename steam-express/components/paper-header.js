import React from 'react';
import Paper from '@mui/material/Paper';

const PaperHeader = (props) => {
    return (
        <Paper
        style={{  
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="paperContainer"
        >
            { props.children }
        </Paper>
    )
}

export default PaperHeader;