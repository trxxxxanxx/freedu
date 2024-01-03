import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
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

    return (
        <Box m='40px'>
            <Button href="/admin/communicate/school-news" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <TextField id="outlined" required placeholder='News Title' sx={classes.titleTextField} />
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" startIcon={<DoDisturbAltRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                    <Button variant="contained" startIcon={<PublishedWithChangesRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Publish </Button>
                    <Button variant="contained" startIcon={<VisibilityRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Preview </Button>
                    <Button variant="contained" startIcon={<SaveAltRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Save </Button>
                </Box>
            </Box>
            <RichTextEditor />
        </Box>
    )
}

export default AddSchoolNews