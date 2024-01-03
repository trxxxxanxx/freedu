import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
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

    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title} mb="20px"> New SMS/Text </Typography>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
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
                    {/* Add */}
                    <Box>
                        <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Include */}
                <Box mr="20px">
                    <Typography variant = "h5" sx={classes.title} mb="20px"> Include </Typography>
                    <Button  sx={{ p:1, backgroundColor: '#F0FFF8', color: '#18AB56', textTransform: 'capitalize', fontWeight: 600, }}>All Active Parents&nbsp;&nbsp;<CancelRoundedIcon/></Button>
                </Box>
            </Box>
            <RichTextEditor />
            <Box display="flex" justifyContent="flex-end" alignItems="center" marginbottom="100px">
                <Button variant="contained" startIcon={<WatchLaterRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                <Button variant="contained" startIcon={<SendRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
            </Box>
        </Box>
    )
}

export default AddSmartSendSMS;