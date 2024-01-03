import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Box, TextField, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../theme";
import { Button, useMediaQuery } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AddIcon from '@mui/icons-material/Add';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { styles } from '../../../style';

const AddSmartSendVoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> New Voice Message </Typography>

            <Box sx={classes.formBox}>
            <   Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Groups </Typography>
                        <TextField id="outlined-select" select placeholder='Select Groups' sx={classes.formTextfield} />
                    </Box>
                    <Box mr='20px'>
                        <Typography variant = "h5" sx={classes.title}> Excludes </Typography>
                        <TextField id="outlined-select" select placeholder='Select Excludes' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Last name or Address </Typography>
                        {isSmallScreen ? (
                            <Box>
                                <Box mb="20px">
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
                <Box>
                    <Typography variant = "h5" sx={classes.title}> <span style={{fontWeight:"bold"}}>Step 1:</span> We’ll call you to record the message. </Typography>
                    <Typography variant = "h6" color={colors.freeduAccent[700]}> Enter you number</Typography>
                    <Box display="flex" alignItems="center" gap='20px'>
                        {isSmallScreen ? (
                            <Box>
                                <Box mb="20px">
                                    <TextField id="outlined" sx={classes.formTextfield} />
                                </Box>
                                <Box>
                                    <Button variant="contained" startIcon={<CallRoundedIcon />} sx={classes.addButton}> Call Now </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="space-between" alignItems="end" gap="20px">
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.formTextfield} />
                                <Button variant="contained" startIcon={<CallRoundedIcon />} sx={classes.addButton}> Call Now </Button>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>

            <Box sx={classes.formBox}>
                <Box>
                    <Typography variant = "h5" sx={classes.title} mb='20px'><span style={{fontWeight:"bold"}}>Step 2:</span> Review and Send.</Typography>
                    <AudioPlayer autoPlay src="http://example.com/audio.mp3" onPlay={e => console.log("onPlay")} style={classes.audioPlayer} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                
                {isSmallScreen ? (
                    <>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <ReplayRoundedIcon /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <WatchLaterRoundedIcon /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> <SendRoundedIcon /> </IconButton>
                    </>
                ) : (
                    <>
                    <Button variant="contained" startIcon={<ReplayRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Start Over </Button>
                    <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                    <Button variant="contained" startIcon={<SendRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AddSmartSendVoice;