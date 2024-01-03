import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
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


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title} mb="20px"> New Voice Message </Typography>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                <Box display="flex" alignItems="end">
                    {/* Groups */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Groups </Typography>
                        <TextField id="outlined-select" select value='Select Groups' sx={classes.formTextfield} />
                    </Box>
                    {/* Excludes */}
                    <Box mr='20px'>
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Excludes </Typography>
                        <TextField id="outlined-select" select value='Select Excludes' sx={classes.formTextfield} />
                    </Box>
                    {/* Last name or Address */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Last name or Address </Typography>
                        <TextField id="outlined" value='Washington' sx={classes.formTextfield} />
                    </Box>
                    {/* Add */}
                    <Box>
                        <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Step 1 */}
                <Box>
                    <Typography variant = "h5" sx={classes.title} mb="20px"> <span style={{fontWeight:"bold"}}>Step 1:</span> We’ll call you to record the message. </Typography>
                    <Typography variant = "h6" color={colors.freeduAccent[700]}> Enter you number</Typography>
                    <Box display="flex" alignItems="center" gap='20px'>
                        <TextField id="outlined" sx={classes.formTextfield} />
                        <Button variant="contained" startIcon={<CallRoundedIcon />} sx={classes.addButton}> Call Now </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Step 2 */}
                <Box>
                    <Typography variant = "h5" sx={classes.title} mb="20px"><span style={{fontWeight:"bold"}}>Step 2:</span> Review and Send.</Typography>
                    <AudioPlayer autoPlay src="http://example.com/audio.mp3" onPlay={e => console.log("onPlay")} style={classes.audioPlayer} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                <Button variant="contained" startIcon={<ReplayRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Start Over </Button>
                <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                <Button variant="contained" startIcon={<SendRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
            </Box>
        </Box>
    )
}

export default AddSmartSendVoice;