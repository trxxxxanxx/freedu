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

const AddSchoolNews = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/school-news" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{borderRadius: 50,  padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[100], color: colors.freeduAccent[600], marginBottom: '30px', marginTop: '-30px', fontSize: '14px', fontWeight: 700, boxShadow: 'none'}}>
                Back
            </Button>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                    <TextField
                        id="outlined"
                        placeholder='News Title'
                        sx={{
                            width: '30%',
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': {
                                color: colors.freeduAccent[700],
                                fontWeight: 700,
                                border: '2px solid #6859FF', // Border width and color
                                borderRadius: '50px',
                                paddingY: -2,
                              },
                        }}
                        />
                <Box display="flex" justifyContent="space-between" alignItems="center">

                    <div className="col-lg-2">
                        <Button variant="contained" startIcon={<DoDisturbAltRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[300], color: colors.freeduAccent[800]}}>
                            Cancel
                        </Button>
                    </div>
                    <div className="col-lg-2">
                        <Button variant="contained" startIcon={<PublishedWithChangesRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                            Publish
                        </Button>
                    </div>
                    <div className="col-lg-2">
                        <Button variant="contained" startIcon={<VisibilityRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                            Preview
                        </Button>
                    </div>
                    <div className="col-lg-2">
                        <Button variant="contained" startIcon={<SaveAltRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[900], color: colors.freeduAccent[800]}}>
                            Save
                        </Button>
                    </div>
                </Box>
            </Box>

            

            <RichTextEditor />
        </Box>
    )
}

export default AddSchoolNews
