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

const AddSmartSendVoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{borderRadius: 50,  padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[100], color: colors.freeduAccent[600], marginBottom: '30px', marginTop: '-30px', fontSize: '14px', fontWeight: 700, boxShadow: 'none'}}>
                Back
            </Button>

            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="20px">
                New Voice Message
            </Typography>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
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
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Subject */}
                <Box marginX="20px">
                    <Typography variant = "h5" color={colors.freeduAccent[600]}  mb="20px">
                        <span style={{fontWeight:"bold"}}>Step 1:</span> We’ll call you to record the message.
                    </Typography>
                    <Typography variant = "h6" color={colors.freeduAccent[700]}>
                        Enter you number
                    </Typography>
                    <Box display="flex" alignItems="center">
                    <TextField
                            id="outlined"
                            sx={{
                                paddingRight: 2,
                                '& .MuiOutlinedInput-root': {
                                    background: colors.freeduAccent[100],
                                    color: colors.freeduAccent[700],
                                    fontWeight: 500,
                                    border: '1px solid #D0D4D9',
                                    borderRadius: '12px',
                                    paddingY: -2,
                                    width: '300px',
                                    height: '35px',
                                },
                            }}
                            />
                    <Button variant="contained" startIcon={<CallRoundedIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Call Now
                    </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Subject */}
                <Box marginX="20px">
                    <Typography variant = "h5" color={colors.freeduAccent[600]}  mb="20px">
                        <span style={{fontWeight:"bold"}}>Step 2:</span> Review and Send.
                    </Typography>
                    <AudioPlayer
                        autoPlay
                        src="http://example.com/audio.mp3"
                        onPlay={e => console.log("onPlay")}
                        // other props here
                        style={{
                                width: '500px',
                                backgroundColor: '#E5E7E8',
                                justifyContent: 'center',
                                color: '#1B2559',
                                borderRadius: '30px',
                                padding: '20px',
                                border: 'none',
                        }}
                    />
                </Box>
            </Box>
            
            

            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                <div className="col-lg-2">
                    <Button variant="contained" startIcon={<ReplayRoundedIcon />} sx={{borderRadius: 50, mx:1, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Start Over
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

export default AddSmartSendVoice;