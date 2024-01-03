import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Grid, useTheme, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { tokens } from "../../../theme";
import { Button, useMediaQuery } from '@mui/material';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { styles } from '../../../style';

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
            <Button href="/admin/communicate/school-news" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
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
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[1000] }}> <DeleteRoundedIcon /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <PublishedWithChangesRoundedIcon /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <VisibilityRoundedIcon /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[400] }}> <ShareRoundedIcon /> </IconButton>
                            <IconButton variant="contained" sx={classes.smallDefaultButton} style={{ backgroundColor: colors.freeduAccent[900] }}> <SaveAltRoundedIcon /> </IconButton>
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
                              <Button variant="contained" startIcon={<DeleteRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[1000]}}> Delete </Button>
                              <Button variant="contained" startIcon={<PublishedWithChangesRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Publish </Button>
                              <Button variant="contained" startIcon={<VisibilityRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Preview </Button>
                              <Button variant="contained" startIcon={<ShareRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Share </Button>
                              <Button variant="contained" startIcon={<SaveAltRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Save </Button>
                            </Box> 
                        </Grid>
                    </Box>
                )}

            <RichTextEditor />
        </Box>
    )
}

export default EditSchoolNews;