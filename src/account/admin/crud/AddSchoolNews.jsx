import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, useTheme, Grid, Button, useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
//Icons
import { HiChevronLeft, HiMiniNoSymbol, HiMiniPencilSquare  } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi";
import { MdSaveAlt } from "react-icons/md";


const AddSchoolNews = () => {
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
                            <TextField id="outlined" required placeholder='News Title' sx={classes.titleTextField} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8} order={{ xs: 1, sm: 1, md: 2, lg: 2 }} display='flex' justifyContent='space-between'>
                            <Button variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[300] }}> Cancel </Button>
                            <Button variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> Publish </Button>
                            <Button variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> Preview </Button>
                            <Button variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[900] }}> Save </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                            <TextField id="outlined" required placeholder='News Title' sx={classes.titleTextField} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Button variant="contained" startIcon={<HiMiniNoSymbol />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                                <Button variant="contained" startIcon={<HiMiniPencilSquare  />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Publish </Button>
                                <Button variant="contained" startIcon={<HiOutlineEye />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Preview </Button>
                                <Button variant="contained" startIcon={<MdSaveAlt />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Save </Button>
                            </Box> 
                        </Grid>
                    </Box>
                )}
                
            <RichTextEditor />
        </Box>
    )
}

export default AddSchoolNews