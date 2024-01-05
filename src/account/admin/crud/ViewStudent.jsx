import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, IconButton, OutlinedInput, InputAdornment, FormControl, TextField  } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { mockGrades, mockFamily, mockDocument, mockDisciplinary, mockClinic, mockExams, mockVaccine, mockMedication, 
        mockStudentReports,mockAcademics, mockCourseWork } from "../../../data/mockDataFreEdu";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { styles } from '../../../style';
import StudentBar from "../shared/StudentBar";
import MedicalBar from "../shared/MedicalBar";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import upload from '../../../data/img/upload.png';
import alogo from '../../../data/img/alogo.png';

const ViewStudent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);

    const gradeColumns = [
        { 
            field: "Course",
            headername: "Course", 
            flex: 1, 
        },
        { 
            field: "Code",
            headername: "Code", 
            flex: 1, 
        },
        { 
            field: "Unit",
            headername: "Unit", 
            flex: 1, 
        },
        { 
            field: "Score",
            headername: "Score", 
            flex: 1, 
        },
        { 
            field: "Grade",
            headername: "Grade", 
            flex: 1, 
        },
        { 
            field: "GradePoint",
            headername: "Grade Point", 
            flex: 1, 
        }
    ];
    const familyColumns = [
        { 
            field: "Name",
            headername: "Name", 
            flex: 1, 
        },
        { 
            field: "Relation",
            headername: "Relation", 
            flex: 1, 
        },
        { 
            field: "Contact",
            headername: "Contact", 
            flex: 1, 
        }
    ];
    const documentColumns = [
        { 
            field: "Name",
            headername: "Name", 
            flex: 1, 
        },
        { 
            field: "Type",
            headername: "Type", 
            flex: 1, 
        },
        { 
            field: "Size",
            headername: "Size", 
            flex: 1, 
        },
        { 
            field: "DateAdded",
            headername: "Date Added", 
            flex: 1, 
        }
    ];
    const disciplinaryColumns = [
        { 
            field: "ViolatedPolicies",
            headername: "Violated Policies", 
            flex: 1, 
        },
        { 
            field: "IncidentDescription",
            headername: "Incident Description", 
            flex: 1, 
        },
        { 
            field: "Consequence",
            headername: "Consequence", 
            flex: 1, 
        },
        { 
            field: "DateandTime",
            headername: "Date and Time", 
            flex: 1, 
        }
    ];
    const reportColumns = [
        { 
            field: "Date",
            headername: "Date", 
            flex: 1, 
        },
        { 
            field: "Time",
            headername: "Time", 
            flex: 1, 
        },
        { 
            field: "Action",
            headername: "Action", 
            flex: 1, 
        },
        { 
            field: "Details",
            headername: "Details", 
            flex: 1, 
        }
    ];
    const clinicColumns = [
        { 
            field: "RecordType",
            headername: "Record Type", 
            flex: 1, 
        },
        { 
            field: "Date",
            headername: "Date", 
            flex: 1, 
        },
        { 
            field: "FamilyNotif",
            headername: "Family Notif", 
            flex: 1, 
        },
        { 
            field: "FollowUp",
            headername: "Follow Up", 
            flex: 1, 
        },
        { 
            field: "Result",
            headername: "Result", 
            flex: 1, 
        }
    ];
    const examsColumns = [
        { 
            field: "ExamType",
            headername: "Exam Type", 
            flex: 1, 
        },
        { 
            field: "Date",
            headername: "Date", 
            flex: 1, 
        },
        { 
            field: "FamilyNotif",
            headername: "Family Notif", 
            flex: 1, 
        },
        { 
            field: "FollowUp",
            headername: "Follow Up", 
            flex: 1, 
        },
        { 
            field: "Result",
            headername: "Result", 
            flex: 1, 
        }
    ];
    const vaccineColumns = [
        { 
            field: "Immunization",
            headername: "Immunization", 
            flex: 1, 
        },
        { 
            field: "NextDue",
            headername: "Next Due", 
            flex: 1, 
        },
        { 
            field: "Dose1",
            headername: "Dose 1", 
            flex: 1, 
        },
        { 
            field: "Dose2",
            headername: "Dose 2", 
            flex: 1, 
        },
        { 
            field: "Dose3",
            headername: "Dose 3", 
            flex: 1, 
        }
    ];
    const medicationColumns = [
        { 
            field: "Medication",
            headername: "Medication", 
            flex: 1, 
        },
        { 
            field: "ReasonTaken",
            headername: "Reason Taken", 
            flex: 1, 
        },
        { 
            field: "StartDate",
            headername: "Start Date", 
            flex: 1, 
        },
        { 
            field: "StopDate",
            headername: "Stop Date", 
            flex: 1, 
        }
    ];
    const academicOverviewColumns = [
        { 
            field: "Semester",
            headername: "Semester", 
            flex: 4, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "First",
            headername: "First", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "Second",
            headername: "Second", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "Third",
            headername: "Third", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        }
        ,
        { 
            field: "Fourth",
            headername: "Fourth", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        },
    ];
    const courseWorkColumns = [
        { 
            field: "Course",
            headername: "Course", 
            flex: 4, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "Credits",
            headername: "Credits", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "Grade",
            headername: "Grade", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        },
        { 
            field: "Status",
            headername: "Status", 
            flex: 1, 
            disableColumnMenu: true,
            sortable: false 
        }
    ];
    

    // Button
    const [activeButton, setActiveButton] = useState('button1');
    const [content, setContent] = useState('');
    const changeContent = (buttonId) => {
        setActiveButton(buttonId);
        switch (buttonId) {
            case 'button1':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockGrades} columns={gradeColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'button2':
                setContent(
                    <Box sx={classes.acads}>
                        <Box display='flex' justifyContent='space-between' sx={{ pb: '20px',  borderBottom: '5px solid #000'}}>
                            <Box>
                                <Typography sx={classes.acadsTitle}>Maria Cruz</Typography>
                                <Typography sx={classes.acadsText}>Grade: 5</Typography>
                                <Typography sx={classes.acadsText}>+63 9991234568</Typography>
                                <Typography sx={classes.acadsText}>mariacruz@gmail.com</Typography>
                            </Box>
                            <Box>
                                <Box display='flex' justifyContent='end' mb='10px'>
                                    <img src={alogo}></img>
                                </Box>
                                <Typography sx={classes.acadsTextBold}>School Logo</Typography>
                                <Typography sx={classes.acadsTextInactive}>1 Jun 2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Typography sx={classes.acadsTitle}>Academic Overview</Typography>
                            <Box sx={classes.acadsRoot} >
                                <DataGrid rows={mockAcademics} columns={academicOverviewColumns} autoHeight density="compact"/>
                            </Box>
                        </Box>

                        <Box sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Typography sx={classes.acadsTitle}>Course Work</Typography>
                            <Box sx={classes.acadsRoot} >
                                <DataGrid rows={mockCourseWork} columns={courseWorkColumns} autoHeight density="compact"/>
                            </Box>
                        </Box>

                        <Box display='flex' justifyContent='space-between' sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Box>
                                <Typography sx={classes.acadsTitle}>Extracurriculars</Typography>
                            </Box>
                            <Box>
                                <Box display='flex' justifyContent='space-between' gap={20} sx={{ py: '8px',  borderBottom: '1px solid #D5D2C8'}}>
                                    <Typography sx={classes.acadsTextBold}>Coding Club</Typography>
                                    <Typography sx={classes.acadsText}>President</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' gap={20} sx={{ py: '8px' }}>
                                    <Typography sx={classes.acadsTextBold}>Debate Team</Typography>
                                    <Typography sx={classes.acadsText}>Member</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box display='flex' justifyContent='space-between' sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Box>
                                <Typography sx={classes.acadsTitle}>Research & Projects</Typography>
                            </Box>
                            <Box>
                                <Box display='flex' justifyContent='space-between' pr='226px' sx={{ py: '8px',  borderBottom: '1px solid #D5D2C8'}}>
                                    <Typography sx={classes.acadsTextBold}>AI Project</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' sx={{ py: '8px' }}>
                                    <Typography sx={classes.acadsTextBold}>Robotics Research</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box display='flex' justifyContent='space-between' sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Box>
                                <Typography sx={classes.acadsTitle}>Academic Achievements</Typography>
                            </Box>
                            <Box>
                                <Box display='flex' justifyContent='space-between' pr='226px' sx={{ py: '8px',  borderBottom: '1px solid #D5D2C8'}}>
                                    <Typography sx={classes.acadsTextBold}>Dean's List</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' sx={{ py: '8px' }}>
                                    <Typography sx={classes.acadsTextBold}>Outstanding Research Award</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ py: '20px',  borderBottom: '5px solid #000'}}>
                            <Box>
                                <Typography sx={classes.acadsTitle}>Recommendations & Endorsements</Typography>
                            </Box>
                            <Box sx={{ borderTop: '2px solid #000',  borderBottom: '2px solid #000' }}>
                                <Box display='flex' justifyContent='space-between' sx={{ py: '8px',  borderBottom: '1px solid #D5D2C8'}}>
                                    <Typography sx={classes.acadsTextBold}>Prof. Smith</Typography>
                                    <Typography sx={classes.acadsText}>"John is an excellent student who consistently demonstrates a high..."</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' sx={{ py: '8px' }}>
                                    <Typography sx={classes.acadsTextBold}>Dr. Johnson</Typography>
                                    <Typography sx={classes.acadsText}>"Highly recommend John for any academic or research opportunities..."</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'button3':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <MedicalBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockGrades} columns={gradeColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'default':
                setContent();
            break;
        }
    };


    // Main
    const [showPassword, setShowPassword] = useState(false);
    const [activeMainButton, setActiveMainButton] = useState('main1');
    const changeMainContent = (buttonId) => {
        setActiveMainButton(buttonId); 
        switch (buttonId) {
            case 'main1':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockGrades} columns={gradeColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'main2':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Box style={classes.cardBox}>
                                    <Box style={classes.cardTitle}>
                                        <Typography variant="h4" fontWeight='500'> Personal Information </Typography>
                                    </Box>

                                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} my='20px' gap='20px'>
                                        <Box>
                                            <Typography> First Name </Typography>
                                            <TextField id="outlined" value='Maria' sx={classes.formTextfield} />
                                        </Box>
                                        <Box>
                                            <Typography> Middle Name </Typography>
                                            <TextField id="outlined" value='Gomez' sx={classes.formTextfield} />
                                        </Box>
                                    </Box>

                                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                                        <Box>
                                            <Typography> Last Name </Typography>
                                            <TextField id="outlined" value='Cruz' sx={classes.formTextfield} />
                                        </Box>
                                        <Box>
                                            <Typography> Suffix </Typography>
                                            <TextField id="outlined" value='-' sx={classes.formTextfield} />
                                        </Box>
                                    </Box>

                                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                                        <Box>
                                            <Typography> Gender </Typography>
                                            <TextField id="outlined"  value='Female' sx={classes.formTextfield} />
                                        </Box>
                                        <Box>
                                            <Typography> Date of Birth </Typography>
                                            <TextField id="outlined"  value='December 7 ,2006' sx={classes.formTextfield} />
                                        </Box>
                                    </Box>

                                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                                        <Box>
                                            <Typography> Height </Typography>
                                            <TextField id="outlined"  value='5’2 ft' sx={classes.formTextfield} />
                                        </Box>
                                        <Box>
                                            <Typography> Weight </Typography>
                                            <TextField id="outlined"  value='56kg' sx={classes.formTextfield} />
                                        </Box>
                                    </Box>

                                    <Box>
                                        <Button variant="contained" sx={classes.saveChangesButton}> Save Changes </Button>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Box style={classes.cardBox}>
                                    <Box style={classes.cardTitle}>
                                        <Typography variant="h4" fontWeight='500'> Contact Information </Typography>
                                    </Box>

                                    <Box my='20px'>
                                        <Typography> Email </Typography>
                                        <TextField id="outlined"  value='mariacruz@gmail.com' sx={classes.longFormTextfield} />
                                    </Box>

                                    <Box mb='20px'>
                                        <Typography> Phone Number </Typography>
                                        <TextField id="outlined"  value='09991234567' sx={classes.longFormTextfield} />
                                    </Box>

                                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                                        <Box>
                                            <Typography> Country </Typography>
                                            <TextField id="outlined"  value='Canada' sx={classes.formTextfield} />
                                        </Box>
                                        <Box>
                                            <Typography> Postal Code </Typography>
                                            <TextField id="outlined"  value='A5S2C6' sx={classes.formTextfield} />
                                        </Box>
                                    </Box>

                                    <Box mb='20px'>
                                        <Typography> Address </Typography>
                                        <TextField id="outlined"  value='1210 Atlantic BLvd., Maple Street Alhambra City' sx={classes.longFormTextfield} />
                                    </Box>

                                    <Box>
                                        <Button variant="contained" sx={classes.saveChangesButton}> Save Changes </Button>
                                    </Box>
                                    
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Box style={classes.cardBox}>
                                    <Box display='flex' justifyContent='space-between' alignItems='center' style={classes.cardTitle}>
                                        <Typography variant="h4" fontWeight='500'> Family </Typography>
                                        <Button variant="contained" sx={classes.saveChangesButton}> <AddRoundedIcon /> Add Family </Button>
                                    </Box>
                                    <Box sx={classes.profileRoot}>
                                        <DataGrid checkboxSelection rows={mockFamily} columns={familyColumns} components={{ Toolbar: GridToolbar }} />
                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                );
            break;
            case 'main3':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Box style={classes.cardBox}>
                                    <Box style={classes.cardTitle}>
                                        <Typography variant="h4" fontWeight='500'> Change Password </Typography>
                                    </Box>
                                    <Box>
                                        <Box my='20px'>
                                            <Typography> Current Password </Typography>
                                            <FormControl sx={classes.longFormTextfield} variant="outlined">
                                                <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)} edge="end" >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box mb='20px'>
                                            <Typography> New Password </Typography>
                                            <FormControl sx={classes.longFormTextfield} variant="outlined">
                                                <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)} edge="end" >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box mb='20px'>
                                            <Typography> Confirm Password </Typography>
                                            <FormControl sx={classes.longFormTextfield} variant="outlined">
                                                <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)} edge="end" >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                />
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button variant="contained" sx={classes.saveChangesButton}> Save Changes </Button>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <Box style={classes.cardBox}>
                                    <Box display='flex' justifyContent='center' m='20px'>
                                        <img src={upload} width={180} height={180}></img>
                                    </Box>
                                    <Box display='flex' justifyContent='center' m='20px'>
                                        <Button sx={classes.uploadProfile}><FileUploadRoundedIcon />&nbsp;&nbsp;Upload Profile Photo</Button>
                                    </Box>
                                    <Box display='flex' justifyContent='center' m='20px'>
                                        <Typography>
                                            <Box component="span" fontWeight="bold">Remember:</Box> For best results, use an image at least 200px by 200px in .jpg or .png format
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                );
            break;
            case 'main4':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>Student Files</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add File </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockDocument} columns={documentColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'main5':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>History</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add Record </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockDisciplinary} columns={disciplinaryColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'main6':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                                <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                                <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                                <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                                <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                                <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                            </Box>
                        </Box>
                        <Box sx={classes.root} p='20px'>
                            <DataGrid checkboxSelection rows={mockStudentReports} columns={reportColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'default':
                setContent();
            break;
        }
    };


    // Medical
    const [activeMedicalButton, setActiveMedicalButton] = useState('medical1');
    const changeMedicalContent = (buttonId) => {
        setActiveMedicalButton(buttonId); 
        switch (buttonId) {
            case 'medical1':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <MedicalBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>Clinic Visits</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add Record </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockClinic} columns={clinicColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'medical2':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <MedicalBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>Exams</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add Record </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockExams} columns={examsColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'medical3':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <MedicalBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>

                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>Vaccinations</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add Record </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockVaccine} columns={vaccineColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'medical4':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Box display='flex' justifyContent='space-between' alignContent='center'>
                                <Typography sx={classes.tableTitle}>Medications</Typography>
                                <Box p='20px'>
                                    <Button variant="contained" sx={classes.cardAddButton}> <AddRoundedIcon />Add Record </Button>
                                </Box>
                            </Box>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockMedication} columns={medicationColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'medical5':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical1' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical1')} > Clinic Visit </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical2' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical2')} > Exams </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical3' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical3')} > Vaccination </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical4' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical4')} > Medications </a>
                                <a href="#" className={`choice ${activeMedicalButton === 'medical5' ? 'active' : ''}`} onClick={() => changeMedicalContent('medical5')} > History </a>
                            </Box>
                        </Box>
                        <Box style={classes.cardAddBox}>
                            <Typography sx={classes.tableTitle}>History</Typography>
                            <Box sx={classes.profileRoot} p='20px'>
                                <DataGrid checkboxSelection rows={mockDisciplinary} columns={disciplinaryColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                            <Box px='20px' pb='20px'>
                                <Button variant="contained" sx={classes.cardAddButton}> Add Record </Button>
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'default':
                setContent();
            break;
        }
    };


    useEffect(() => {
        setContent(
            <Box m="20px">
                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>
                    <StudentBar />
                    <Box mt='30px'>
                        <a href="#" className={`choice ${activeMainButton === 'main1' ? 'active' : ''}`} onClick={() => changeMainContent('main1')} > Grades </a>
                        <a href="#" className={`choice ${activeMainButton === 'main2' ? 'active' : ''}`} onClick={() => changeMainContent('main2')} >  Personal Info </a>
                        <a href="#" className={`choice ${activeMainButton === 'main3' ? 'active' : ''}`} onClick={() => changeMainContent('main3')} >  Account Settings </a>
                        <a href="#" className={`choice ${activeMainButton === 'main4' ? 'active' : ''}`} onClick={() => changeMainContent('main4')} >  Documents </a>
                        <a href="#" className={`choice ${activeMainButton === 'main5' ? 'active' : ''}`} onClick={() => changeMainContent('main5')} >  Disciplinary Record </a>
                        <a href="#" className={`choice ${activeMainButton === 'main6' ? 'active' : ''}`} onClick={() => changeMainContent('main6')} >  Reports </a>
                    </Box>
                </Box>
                <Box sx={classes.root} >
                    <DataGrid checkboxSelection rows={mockGrades} columns={gradeColumns} components={{ Toolbar: GridToolbar }} />
                </Box>
            </Box>
        );
      }, []); 


    return (
        <Box m="20px">
            <Box display="flex">
                <Button sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton), }} onClick={() => changeContent('button1')} variant="contained" startIcon={<HomeRoundedIcon />}> Main </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton), }} onClick={() => changeContent('button2')} variant="contained" startIcon={<ClassRoundedIcon />}> Academics </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button3' && classes.activeButton), }} onClick={() => changeContent('button3')} variant="contained" startIcon={<ScienceRoundedIcon />}> Medical </Button>
            </Box>
            {content}
        </Box>
    );
};

export default ViewStudent;