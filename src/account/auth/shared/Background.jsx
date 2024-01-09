import React from 'react'
import bg from '../../../data/img/bg.png';
import logo2 from '../../../data/img/logo2.png';
import { Button, useMediaQuery, useTheme, Box } from '@mui/material';
import { tokens } from "../../../theme";
import { styles } from '../../../style';

const Background = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
            <Box style={{ overflow: 'hidden', width:'100vw', height: '100vh', position: 'relative' }}>
                {isSmallScreen ? (
                    <>
                    <img src={bg} style={{ objectFit: 'cover', }} />
                    <img src={logo2} style={classes.logoImg} width="80%"></img>
                    <Button variant="contained" sx={classes.learnMoreSm}> Learn More </Button>
                    </>
                    ) : (
                    <>
                    <img src={bg} style={{ objectFit: 'cover', }} />
                    <img src={logo2} style={classes.logoImg} width="30%"></img>
                    <Button variant="contained" sx={classes.learnMoreLg}> Learn More </Button>
                    </>
                )}
            </Box>
    )
}

export default Background;