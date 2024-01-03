import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { styles } from '../../../style';

const AddSmartSendEmail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title} mb="20px"> New Email </Typography>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                <Box display="flex" marginBottom='20px'>
                    {/* From */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Category Level </Typography>
                        <TextField id="outlined" value='George Washington' sx={classes.formTextfield} />
                    </Box>
                    {/* Email */}
                    <Box>
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Email </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap="20px">
                            <TextField id="outlined" value='george@gmail.com' sx={classes.formTextfield} />
                            <FormControlLabel fontSize='12px' color="#A3AED0" control={<Checkbox />} label="Hide Email" />
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" alignItems="end">
                    {/* Groups */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Groups </Typography>
                        <TextField id="outlined-select" select value='Select Groups' sx={classes.formTextfield} />
                    </Box>
                    {/* Excludes */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Excludes </Typography>
                        <TextField id="outlined-select" select value='Select Excludes' sx={classes.formTextfield} />
                    </Box>
                    {/* Last name or Address */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Last name or Address </Typography>
                        <TextField id="outlined" value='Washington' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Subject */}
                <Box>
                    <Typography variant = "h5" sx={classes.title} mb="20px"> Subject </Typography>
                    <TextField id="outlined" value='Subject' sx={classes.modalTextField}  />
                </Box>
            </Box>
            <RichTextEditor />
            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button variant="contained" startIcon={<DriveFileRenameOutlineRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Draft </Button>
                <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                <Button variant="contained" startIcon={<SendRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
            </Box>
        </Box>
    )
}

export default AddSmartSendEmail;