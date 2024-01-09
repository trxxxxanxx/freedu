import React from 'react'
import RichTextEditor from '../shared/RichTextEditor';
import { Box, TextField, Typography, useTheme, IconButton, Button, useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
//Icons
import { HiChevronLeft } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { HiClock } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";


const AddSmartSendEmail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> New Email </Typography>

            <Box sx={classes.formBox}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> From </Typography>
                        <TextField id="outlined" placeholder='From' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        {/* <Box display="flex" justifyContent="space-between" alignItems="center" gap="20px"> */}
                            <Typography variant="h5" sx={classes.title}> Email </Typography>
                            {/* <FormControlLabel fontSize='12px' color="#A3AED0" control={<Checkbox />} label="Hide Email" /> */}
                        {/* </Box> */}
                        <TextField id="outlined" placeholder='Email' sx={classes.formTextfield} />
                    </Box>
                </Box>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Groups </Typography>
                        <TextField id="outlined-select" select placeholder='Select Groups' sx={classes.formTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Excludes </Typography>
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
                <Typography variant = "h5" sx={classes.title}> Subject </Typography>
                <TextField id="outlined" placeholder='Subject' sx={classes.modalTextField}  />
            </Box>

            <RichTextEditor />

            <Box display="flex" justifyContent="flex-end" alignItems="center">
                {isSmallScreen ? (
                    <>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <BiSolidEdit /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> <HiClock /> </IconButton>
                    <IconButton variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> <RiSendPlaneFill /> </IconButton>
                    </>
                ) : (
                    <>
                    <Button variant="contained" startIcon={<BiSolidEdit />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Draft </Button>
                    <Button variant="contained" startIcon={<HiClock />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Schedule </Button>
                    <Button variant="contained" startIcon={<RiSendPlaneFill />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[900]}}> Send Now </Button>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AddSmartSendEmail;