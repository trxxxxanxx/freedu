import React from 'react'
import { Box } from "@mui/material";
import bg from '../../../data/img/bg.png';
import logo2 from '../../../data/img/logo2.png';
import Button from '@mui/material/Button';

const Background = () => {
  return (
        <Box style={{ overflow: 'hidden', width:'100vw', height: '100vh', position: 'relative' }}>
            <img src={bg} style={{ objectFit: 'cover', }} />
            <img src={logo2} style={{ position: 'absolute', width:'30vw', height: 'auto', top: '40%', left: '20%' }}></img>
            <Button 
                variant="contained" 
                sx={{ 
                    position: 'absolute', 
                    top: '56%', 
                    left: '42%', 
                    borderRadius: 50, 
                    pt: 1,
                    pb: 1,
                    pl: 4,
                    pr: 4,
                    textTransform: 'Capitalize', 
                    backgroundColor: '#8479EE', 
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: 'Poppins',
                }}>
                Learn More
            </Button>
        </Box>
  )
}

export default Background;