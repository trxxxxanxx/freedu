import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Grid, useTheme, IconButton, Button, useMediaQuery, MenuItem } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
// Icons
import { MdSaveAlt } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiMiniPencilSquare, HiChevronLeft } from "react-icons/hi2";
import { IoShareSocialSharp } from "react-icons/io5";
import { HiOutlineEye } from "react-icons/hi";

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

const EditSchoolNews = () => {
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
                        </TextField>                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8} order={{ xs: 1, sm: 1, md: 2, lg: 2 }} display='flex' justifyContent='space-between'>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[1000] }}> <RiDeleteBin5Fill /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <HiMiniPencilSquare /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <HiOutlineEye /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <IoShareSocialSharp /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[900] }}> <MdSaveAlt /> </IconButton>
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
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Button variant="contained" startIcon={<RiDeleteBin5Fill />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[1000]}}> Delete </Button>
                              <Button variant="contained" startIcon={<HiMiniPencilSquare />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Publish </Button>
                              <Button variant="contained" startIcon={<HiOutlineEye />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Preview </Button>
                              <Button variant="contained" startIcon={<IoShareSocialSharp />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Share </Button>
                              <Button variant="contained" startIcon={<MdSaveAlt />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Save </Button>
                            </Box> 
                        </Grid>
                    </Box>
                )}

            <RichTextEditor />
        </Box>
    )
}

export default EditSchoolNews;