import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../theme";
import { Button, useMediaQuery } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AddIcon from '@mui/icons-material/Add';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { styles } from '../../../style';

const AddSmartSendSMS = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> New SMS/Text </Typography>
            
            <Box sx={classes.formBox}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Groups </Typography>
                        <TextField id="outlined-select" select placeholder='Select Groups' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Excludes </Typography>
                        <TextField id="outlined-select" select placeholder='Select Excludes' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Last name or Address </Typography>
                        {isSmallScreen ? (
                            <Box>
                                <Box>
                                    <TextField id="outlined" placeholder='Last name or Address' sx={classes.formTextfield} />
                                </Box>
                                <Box>
                                    <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="space-between" alignItems="end" gap="20px">
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.formTextfield} />
                                <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>

            <Box sx={classes.formBox}>
                <Typography variant = "h5" sx={classes.title}> Include </Typography>
                <Button  sx={classes.include}>All Active Parents&nbsp;&nbsp;<CancelRoundedIcon/></Button>
            </Box>

            <RichTextEditor />

            <Box display="flex" justifyContent="flex-end" alignItems="center">
                {isSmallScreen ? (
                    <>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <WatchLaterRoundedIcon /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> <SendRoundedIcon /> </IconButton>
                    </>
                ) : (
                    <>
                    <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                    <Button variant="contained" startIcon={<SendRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AddSmartSendSMS;