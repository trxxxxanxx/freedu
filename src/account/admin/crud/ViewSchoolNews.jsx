import React from 'react'
import { Box, TextField, Grid, useTheme, IconButton, Typography, MenuItem, Button, useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import logo from '../../../data/img/logo.png';
import news4 from '../../../data/img/news4.png';
// Icons
import { HiChevronLeft } from "react-icons/hi2";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiPrinterFill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

const news = [
  {
    value: 'School Appreciation',
    label: 'School Appreciation',
  },
  {
    value: 'Teacher’s Day',
    label: 'Teacher’s Day',
  },
  {
    value: 'First Day of School',
    label: 'First Day of School',
  },
  {
    value: 'Brigada Skwela',
    label: 'Brigada Skwela',
  },
];

const ViewSchoolNews = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/school-news" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            {isSmallScreen ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={8} order={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                            <TextField id="outlined-select-currency" select defaultValue="School Appreciation" sx={classes.titleTextField}>
                                {news.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8} order={{ xs: 1, sm: 1, md: 2, lg: 2 }} display='flex' justifyContent='end' gap={2}>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <RiPrinterFill /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <IoShareSocialSharp /> </IconButton>
                            <IconButton href="/admin/communicate/school-news/edit" variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <BiSolidEdit /> </IconButton>
                        </Grid>
                    </Grid>
                ) : (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                          <TextField id="outlined-select-currency" select defaultValue="School Appreciation" sx={classes.titleTextField}>
                              {news.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                            <Box display="flex" justifyContent="end" alignItems="center">
                              <Button variant="contained" startIcon={<RiPrinterFill />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Print </Button>
                              <Button variant="contained" startIcon={<IoShareSocialSharp />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Share </Button>
                              <Button href="/admin/communicate/school-news/edit" variant="contained" startIcon={<BiSolidEdit />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Edit </Button>
                            </Box> 
                        </Grid>
                    </Box>
                )}

            <Box sx={classes.news}>
                {isSmallScreen ? (
                    <>
                    <Box display='flex' justifyContent='center'>
                        <img src={logo} width='100%'></img>
                    </Box>
                    <Typography  style={{ fontSize: '20px'}} sx={classes.newsTitle}>School Appreciation </Typography>
                    </>
                ) : (
                    <>
                    <Box display='flex' justifyContent='center'>
                        <img src={logo} width='30%'></img>
                    </Box>
                    <Typography sx={classes.newsTitle}>School Appreciation </Typography>
                    </>
                )}
                
                <Typography sx={classes.newsParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.</Typography>
                <Typography sx={classes.newsParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.</Typography>
                <Box display='flex' justifyContent='center'>
                    <img src={news4} width='100%'></img>
                </Box>
            </Box>
        </Box>
    )
}

export default ViewSchoolNews;