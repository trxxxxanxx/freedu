import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../theme";
import { Button, useMediaQuery } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { styles } from '../../../style';

const AddProspects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> Prospective Student Form </Typography>

            <Box sx={classes.formBox}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='40px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Student Name </Typography>
                        <TextField id="outlined" placeholder='Student Name' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Date of Birth </Typography>
                        <TextField id="outlined" placeholder='Date of Birth' sx={classes.formTextfield} />
                    </Box>
                </Box>

                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='40px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Contact Number </Typography>
                        <TextField id="outlined" placeholder='Contact Number' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Email </Typography>
                        <TextField id="outlined" placeholder='Email' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Address </Typography>
                        <TextField id="outlined" placeholder='Address' sx={classes.formTextfield} />
                    </Box>
                </Box>

                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='40px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Grade Entering </Typography>
                        <TextField id="outlined" placeholder='Grade Entering' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Log Date </Typography>
                        <TextField id="outlined" placeholder='Log Date' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Name of Current School </Typography>
                        <TextField id="outlined" placeholder='Name of Current School' sx={classes.formTextfield} />
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h5" sx={classes.title}> How you heard about us? </Typography>
                    <TextField multiline rows={2} variant="outlined" fullWidth sx={classes.formTextArea} />
                </Box>
            </Box>

            <Typography variant = "h4" sx={classes.title} mt='20px'> Workflow </Typography>

            <Box sx={classes.formBox}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='40px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Tags </Typography>
                        <TextField id="outlined-select" select placeholder='Select Tags' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Follow-up Date </Typography>
                        <TextField id="outlined" placeholder='Follow-up Date' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Next Follow-up Action </Typography>
                        <TextField id="outlined" placeholder='Next Follow-up Action' sx={classes.formTextfield} />
                    </Box>
                </Box>

                <Box mb='20px'>
                    <Typography variant="h5" sx={classes.title}> Notes </Typography>
                    <TextField multiline rows={2} variant="outlined" fullWidth sx={classes.formTextArea} />
                </Box>

                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='40px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Close Date </Typography>
                        <TextField id="outlined" placeholder='Close Date' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Closing Disposition </Typography>
                        <TextField id="outlined" placeholder='Closing Disposition' sx={classes.formTextfield} />
                    </Box>
                </Box>
                
            </Box>

            

            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Save </Button>
            </Box>
        </Box>
    )
}

export default AddProspects;
