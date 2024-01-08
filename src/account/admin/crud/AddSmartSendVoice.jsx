import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Box, TextField, Typography, useTheme, IconButton, Button, useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
// Icons
import { IoIosAdd } from "react-icons/io";
import { HiChevronLeft, HiClock } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const AddSmartSendVoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
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
                                    <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="space-between" alignItems="end" gap="20px">
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.formTextfield} />
                                <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
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
                                    <Button variant="contained" startIcon={<IoCall />} sx={classes.addButton}> Call Now </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="space-between" alignItems="end" gap="20px">
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.formTextfield} />
                                <Button variant="contained" startIcon={<IoCall />} sx={classes.addButton}> Call Now </Button>
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
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <VscDebugRestart /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <HiClock /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> <RiSendPlaneFill /> </IconButton>
                    </>
                ) : (
                    <>
                    <Button variant="contained" startIcon={<VscDebugRestart />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Start Over </Button>
                    <Button variant="contained" startIcon={<HiClock />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                    <Button variant="contained" startIcon={<RiSendPlaneFill />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AddSmartSendVoice;