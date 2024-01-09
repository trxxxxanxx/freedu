import React from 'react'
import { Box, TextField, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
// Icons
import { HiChevronLeft, HiMiniNoSymbol } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";


const AddSmartSendGroup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> New Group </Typography>

            <Box sx={classes.formBox}>
                <Typography variant = "h5" sx={classes.title}> Group Name </Typography>
                <TextField id="outlined" placeholder='Group Name' sx={classes.modalTextField} />
            </Box>

            <Box sx={classes.formBox}>
                <Typography variant = "h4" sx={classes.title} mb='20px'> Includes </Typography>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Person Type </Typography>
                        <TextField id="outlined-select" select placeholder='Person Type' sx={classes.shortFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Status </Typography>
                        <TextField id="outlined-select" select placeholder='Select Status' sx={classes.shortFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Grade </Typography>
                        <TextField id="outlined-select" select placeholder='Select Grade' sx={classes.shortFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Division </Typography>
                        <TextField id="outlined-select" select placeholder='Select Division' sx={classes.shortFormTextfield} />
                    </Box>
                </Box>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Class </Typography>
                        <TextField id="outlined-select" select placeholder='Select Class' sx={classes.shortFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant = "h5" sx={classes.title}> Tag </Typography>
                        {isSmallScreen ? (
                            <Box>
                                <Box mb="20px">
                                    <TextField id="outlined-select" select placeholder='Select Tag' sx={classes.shortFormTextfield} />
                                </Box>
                                <Box display='flex'>
                                    <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                                    <Button variant="contained" startIcon={<HiMiniNoSymbol />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="space-between" alignItems="end" gap="20px">
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.shortFormTextfield} />
                                <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                                <Button variant="contained" startIcon={<HiMiniNoSymbol />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                            </Box>
                        )}
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