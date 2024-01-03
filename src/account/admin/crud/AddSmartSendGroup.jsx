import React from 'react'
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styles } from '../../../style';

const AddSmartSendGroup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title} mb="20px"> New Group </Typography>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Group Name */}
                <Box mr="20px">
                    <Typography variant = "h5" sx={classes.title} mb="20px"> Group Name </Typography>
                    <TextField id="outlined" value='Immunization Due June' sx={classes.modalTextField} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: colors.freeduAccent[100], padding: 4, marginY: 2, borderRadius: '20px' }}>
                {/* Includes */}
                <Typography variant = "h4" sx={classes.title} mb="20px"> Includes </Typography>
                <Box display="flex" marginBottom='20px'>
                    {/* Person Type */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Person Type </Typography>
                        <TextField id="outlined-select" select value='Parents' sx={classes.formTextfield} />
                    </Box>
                    {/* Status */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Status </Typography>
                        <TextField id="outlined-select" select value='Select Status' sx={classes.formTextfield} />
                    </Box>
                    {/* Grade */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Grade </Typography>
                        <TextField id="outlined-select" select value='Select Grade' sx={classes.formTextfield} />
                    </Box>
                    {/* Division */}
                    <Box>
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Division </Typography>
                        <TextField id="outlined-select" select value='Select Division' sx={classes.formTextfield} />
                    </Box>
                </Box>
                <Box display="flex" marginBottom='20px'  alignItems="flex-end">
                    {/* Class */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Class </Typography>
                        <TextField id="outlined-select" select value='Select Class' sx={classes.formTextfield} />
                    </Box>
                    {/* Tag */}
                    <Box mr="20px">
                        <Typography variant = "h5" sx={classes.title} mb="20px"> Tag </Typography>
                        <TextField id="outlined-select" select value='Select Tag' sx={classes.formTextfield} />
                    </Box>
                    {/* Add */}
                    <Box mr="10px">
                        <Button variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add </Button>
                    </Box>
                    {/* Close */}
                    <Box>
                        <Button variant="contained" startIcon={<CloseRoundedIcon />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
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

export default AddSmartSendGroup;