import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const currencies = [
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


    return (
        <Box m='20px'>
            <Button href="/admin/communicate/school-news" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{borderRadius: 50,  padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[100], color: colors.freeduAccent[600], marginBottom: '30px', marginTop: '-30px', fontSize: '14px', fontWeight: 700, boxShadow: 'none'}}>
                Back
            </Button>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <TextField
                    id="outlined-select-currency"
                    select
                    defaultValue="School Appreciation"
                    sx={{
                        marginBottom: 2,
                        '& .MuiOutlinedInput-root': {
                            color: colors.freeduAccent[700],
                            fontWeight: 700,
                            border: '2px solid #6859FF', // Border width and color
                            borderRadius: '50px',
                            paddingX: 2,
                          },
                    }}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <div className="col-lg-2">
                        <Button variant="contained" startIcon={<DeleteRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[1000], color: colors.freeduAccent[800]}}>
                            Delete
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
                        <Button variant="contained" startIcon={<ShareRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                            Share
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

export default EditSchoolNews;