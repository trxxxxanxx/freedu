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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const AddSmartSendEmail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Box m='20px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{borderRadius: 50,  padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[100], color: colors.freeduAccent[600], marginBottom: '30px', marginTop: '-30px', fontSize: '14px', fontWeight: 700, boxShadow: 'none'}}>
                Back
            </Button>

            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                New Email
            </Typography>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                <Box display="flex" marginBottom='20px'>
                    {/* From */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            From
                        </Typography>
                        <TextField
                            id="outlined"
                            placeholder='George Washington'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '243px',
                                    height: '35px',
                                },
                            }}
                            />
                    </Box>
                    
                    {/* Email */}
                    <Box>
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold"  mb="20px">
                            Email
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap="20px">
                            <TextField
                            id="outlined"
                            placeholder='george@gmail.com'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '243px',
                                    height: '35px',
                                },
                            }}
                            />
                            <FormControlLabel fontSize='12px' color="#A3AED0" control={<Checkbox />} label="Hide Email" />
                        </Box>
                        
                    </Box>
                </Box>

                <Box display="flex" alignItems="end">
                    {/* Groups */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Groups
                        </Typography>
                        <TextField
                            id="outlined-select"
                            select
                            placeholder="Select Groups"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '243px',
                                    height: '35px',
                                },
                            }}
                            />
                    </Box>
                    
                    {/* Excludes */}
                    <Box>
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold"  mb="20px">
                            Excludes
                        </Typography>
                        <TextField
                        id="outlined-select"
                        select
                        placeholder="Select Excludes"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                background: colors.freeduAccent[100],
                                color: colors.freeduAccent[700],
                                fontWeight: 500,
                                border: '1px solid #D0D4D9',
                                borderRadius: '12px',
                                paddingY: -2,
                                width: '243px',
                                height: '35px',
                            },
                        }}
                        />
                    </Box>

                    {/* Last name or Address */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Last name or Address
                        </Typography>
                        <TextField
                            id="outlined"
                            placeholder='Washington'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '243px',
                                    height: '35px',
                                },
                            }}
                            />
                    </Box>
                    
                    <Box>
                        <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                            Add News
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Subject */}
                <Box marginX="20px">
                    <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                        Subject
                    </Typography>
                    <TextField
                            id="outlined"
                            placeholder='Email Subject'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '469px',
                                    height: '35px',
                                },
                            }}
                            />
                </Box>
            </Box>


            <RichTextEditor />

            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                <div className="col-lg-2">
                    <Button variant="contained" startIcon={<DriveFileRenameOutlineRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Draft
                    </Button>
                </div>
                <div className="col-lg-2">
                    <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Schedule
                    </Button>
                </div>
                <div className="col-lg-2">
                    <Button variant="contained" startIcon={<SendRoundedIcon  />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[900], color: colors.freeduAccent[800]}}>
                        Send Now
                    </Button>
                </div>
            </Box>
        </Box>
    )
}

export default AddSmartSendEmail;