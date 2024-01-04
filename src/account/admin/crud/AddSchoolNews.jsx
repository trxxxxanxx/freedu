import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, IconButton, useTheme, Grid} from "@mui/material";
import { tokens } from "../../../theme";
import { Button, useMediaQuery } from '@mui/material';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { styles } from '../../../style';

const AddSchoolNews = () => {
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
                                <Button variant="contained" startIcon={<DoDisturbAltRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                                <Button variant="contained" startIcon={<PublishedWithChangesRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Publish </Button>
                                <Button variant="contained" startIcon={<VisibilityRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Preview </Button>
                                <Button variant="contained" startIcon={<SaveAltRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Save </Button>
                            </Box> 
                        </Grid>
                    </Box>
                )}
                
            <RichTextEditor />
        </Box>
    )
}

export default AddSchoolNews