import React from 'react'
import { Box, TextField, Typography, useTheme, Button, useMediaQuery, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
//Icons
import { HiChevronLeft } from "react-icons/hi2";


const AddVisionExam = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box m='40px'>
            <Button href="/admin/account/student/id" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> Vision Screening </Typography>

            <Box sx={classes.formBox}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='80px'>
                  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Staff </Typography>
                        <TextField id="outlined" placeholder='Staff' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Grade </Typography>
                        <TextField id="outlined-select" select placeholder='Grade' sx={classes.shortestFormTextfield} />
                        <Typography sx={classes.subtitle}>Level on Date of Service</Typography>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Follow-up </Typography>
                        <TextField id="outlined" placeholder='Follow-up' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Dr. refer </Typography>
                        <TextField id="outlined" placeholder='Dr. refer' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Closed </Typography>
                        <TextField id="outlined" placeholder='Closed' sx={classes.shortestFormTextfield} />
                    </Box>
                  </Box>
                </Box>

                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='80px'>
                  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Date </Typography>
                        <TextField id="outlined" placeholder='Date' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Time </Typography>
                        <TextField id="outlined-select" select placeholder='Time' sx={classes.shortestFormTextfield} />
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Family Notified </Typography>
                        <TextField id="outlined" placeholder='Family Notified' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Doctor’s Report </Typography>
                        <TextField id="outlined" placeholder='Doctor’s Report' sx={classes.shortestFormTextfield} />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={classes.title}> Result </Typography>
                        <TextField id="outlined-select" select placeholder='Normal' sx={classes.shortestFormTextfield} />
                    </Box>
                  </Box>
                </Box>
            </Box>
            
            <Box sx={classes.formBox}>
                {isSmallScreen ? (
                    <>
                    <Box>
                        <Box display='flex' mb='20px'>
                            <Typography variant="h5" sx={classes.title} width='200px'>Without Glasses</Typography>
                        </Box>
                        <FormControl>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Left</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Right</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Both</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    <Box>
                        <Box display='flex' my='20px'>
                            <Typography variant="h5" sx={classes.title} width='200px'>With Glasses</Typography>
                        </Box>
                        <FormControl>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Left</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Right</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' flexDirection={{ xs: 'column', sm: 'row' }}>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Both</FormLabel>
                                </Box>
                                <Box width='250px'>
                                    <TextField variant="outlined" sx={classes.xxsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" placeholder='Comments (if abnormal)' sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box>
                        <Box display='flex' mb='20px'>
                            <Typography variant="h5" sx={classes.title} width='650px'>Without Glasses</Typography> 
                            <Typography variant="h5" sx={classes.title}>Comments (if abnormal)</Typography> 
                        </Box>
                        <FormControl>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Left</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Right</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Both</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    <Box>
                        <Box display='flex' my='20px'>
                            <Typography variant="h5" sx={classes.title} width='650px'>With Glasses</Typography> 
                            <Typography variant="h5" sx={classes.title}>Comments (if abnormal)</Typography> 
                        </Box>
                        <FormControl>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Left</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Right</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='200px'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" variant="h5" sx={classes.title}>Both</FormLabel>
                                </Box>
                                <Box width='300px'>
                                    <TextField variant="outlined" sx={classes.xsFormTextfield} />
                                </Box>
                                <Box mb='20px'>
                                    <TextField variant="outlined" sx={classes.longFormTextfield} />
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    </>
                )}
            </Box>

            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Save </Button>
            </Box>
        </Box>
    )
}

export default AddVisionExam;