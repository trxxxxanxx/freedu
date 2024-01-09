import React from 'react'
import { Box, Typography, Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import profile2 from '../../../data/img/profile2.png';
import { tokens } from "../../../theme";
import { styles } from '../../../style';
// Icons
import { IoIosAdd } from "react-icons/io";

const StudentBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box display="flex" alignItems="flex-start" justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>

            <Box display='flex' alignItems='center'>
                <Box marginRight='30px'>
                    <img src={profile2}></img>
                </Box>
                <Box>
                    <Typography variant = "h4" sx={classes.title}> Maria Cruz </Typography>
                    <Typography sx={classes.textStyle} style={{ color: colors.freeduAccent[300]}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                    <Typography sx={classes.textStyle} style={{ color: colors.freeduAccent[300]}}> Contact: +63 09991234568</Typography>
                </Box>
            </Box>

            <Box>
                <Typography variant = "h4" sx={classes.title}  mb="8px"> Tags </Typography>
                <Grid container spacing={2}>
                    {['B.Ball', 'Robotics', 'Girl Scout', 'Math Club', 'Book Club'].map((tag, index) => (
                        <Grid item key={index} xs={6} sm={6} md={4} lg={4}>
                            <Typography sx={classes.tags}>
                                {tag}
                            </Typography>
                        </Grid>
                    ))}
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                        <Button variant="contained" sx={classes.addTags} startIcon={<IoIosAdd />} > Add Tag </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Typography variant = "h4" sx={classes.title}  mb="8px"> Last Login </Typography>
                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
            </Box>
        </Box>  
    )
}

export default StudentBar