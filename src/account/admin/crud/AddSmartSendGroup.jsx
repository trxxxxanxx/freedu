import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const AddSmartSendGroup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{borderRadius: 50,  padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[100], color: colors.freeduAccent[600], marginBottom: '30px', marginTop: '-30px', fontSize: '14px', fontWeight: 700, boxShadow: 'none'}}>
                Back
            </Button>

            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                New Group
            </Typography>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Group Name */}
                <Box marginX="20px">
                    <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                        Group Name
                    </Typography>
                    <TextField
                            id="outlined"
                            placeholder='Immunization Due June'
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


            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                    Includes
                </Typography>

                <Box display="flex" marginBottom='20px'>
                    {/* Person Type */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Person Type
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Parents'
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

                    {/* Status */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                        Status
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Select Status'
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

                    {/* Grade */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                        Grade
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Select Grade'
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

                    {/* Division */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Division
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Select Division'
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
                </Box>

                <Box display="flex" marginBottom='20px'  alignItems="flex-end">
                    {/* Class */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Class
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Select Class'
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

                    {/* Tag */}
                    <Box marginX="20px">
                        <Typography variant = "h5" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                            Tag
                        </Typography>
                        <TextField
                            select
                            id="outlined-select"
                            placeholder='Select Tag'
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

                    <Box marginX="20px">
                        <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                            Add
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" startIcon={<CloseRoundedIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[300], color: colors.freeduAccent[800]}}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
                    
            </Box>


            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                <div className="col-lg-2">
                    <Button variant="contained" sx={{borderRadius: 50, mx:1, padding: 1, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[300], color: colors.freeduAccent[800]}}>
                        Cancel
                    </Button>
                </div>
                <div className="col-lg-2">
                    <Button variant="contained" sx={{borderRadius: 50, mx:1, padding: 1, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Save
                    </Button>
                </div>
            </Box>
        </Box>
    )
}

export default AddSmartSendGroup;