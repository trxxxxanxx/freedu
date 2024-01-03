import { useState, useEffect } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { mockGrades, mockFamily, mockDocument } from "../../../data/mockDataFreEdu";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import { styles } from '../../../style';
import StudentBar from "../shared/StudentBar";

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
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
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
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Clinic Visit</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Exams</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Vaccination</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Medications</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >History</a>
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
    const changeMainContent = (buttonId) => {
        setActiveButton(buttonId); 
        switch (buttonId) {
            case 'main1':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
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
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} active >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
                            </Box>
                        </Box>

                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={1} display='flex' justifyContent='space-between' mb='20px'>

                            <Box style={classes.cardBox}>
                                <Box style={classes.cardTitle}>
                                    <Typography variant="h4" fontWeight='500'> Personal Information </Typography>
                                </Box>

                                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
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

                            <Box style={{ backgroundColor: colors.freeduAccent[100], borderRadius: '20px', width: '50%', padding: '20px'}}>
                                <Box style={classes.cardTitle}>
                                    <Typography variant="h4" fontWeight='500'> Contact Information </Typography>
                                </Box>

                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Typography> Email </Typography>
                                    <TextField id="outlined"  value='mariacruz@gmail.com' sx={classes.modalTextField} />
                                </Box>

                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Typography> Phone Number </Typography>
                                    <TextField id="outlined"  value='09991234567' sx={classes.modalTextField} />
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

                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Typography> Address </Typography>
                                    <TextField id="outlined"  value='1210 Atlantic BLvd., Maple Street Alhambra City' sx={classes.modalTextField} />
                                </Box>

                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Button variant="contained" sx={classes.saveChangesButton}> Save Changes </Button>
                                </Box>
                                
                            </Box>

                        </Grid>


                        <Box style={{ backgroundColor: colors.freeduAccent[100], borderRadius: '20px', width: '48%', padding: '20px'}}>
                            <Box display='flex' justifyContent='space-between' alignItems='center' style={{ padding:'0px 20px 14px 20px' }}  borderBottom='1px solid #E5E7E8'>
                                <Typography variant="h4" fontWeight='500'> Family </Typography>
                                <Button variant="contained" sx={{borderRadius: 50, mx:1, paddingY: 1, paddingX: 3, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                                    Add Family
                                </Button>
                            </Box>
                            <Box sx={classes.root} >
                                <DataGrid checkboxSelection rows={mockFamily} columns={familyColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                        </Box>

                    </Box>
                );
            break;
            case 'main3':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='space-between' mb='20px'>
                            <Box style={classes.cardBox}>
                                <Box style={classes.cardTitle}>
                                    <Typography variant="h4" fontWeight='500'> Change Password </Typography>
                                </Box>
                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Box>
                                        <Typography> Current Password </Typography>
                                        <TextField id="outlined" value='••••••••' sx={classes.modalTextField} />
                                    </Box>
                                    <Box>
                                        <Typography> New Password </Typography>
                                        <TextField id="outlined" placeholder='Password' sx={classes.modalTextField} />
                                    </Box>
                                    <Box>
                                        <Typography> Confirm Password </Typography>
                                        <TextField id="outlined" placeholder='Password' sx={classes.modalTextField} />
                                    </Box>
                                </Box>
                                <Box style={{ padding:'8px 20px 8px 20px' }}>
                                    <Button variant="contained" sx={classes.saveChangesButton}> Save Changes </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                );
            break;
            case 'main4':
                setContent(
                    <Box m="20px">
                        <Box sx={classes.studentbarBox}>
                            <StudentBar />
                            <Box mt='30px'>
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
                            </Box>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockDocument} columns={documentColumns} components={{ Toolbar: GridToolbar }} />
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
                                <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                                <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
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

    useEffect(() => {
        setContent(
            <Box m="20px">
                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>
                    <StudentBar />
                    <Box mt='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main5')} >Counseling</a>
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
                <Button sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton), }} onClick={() => changeContent('button1')} variant="contained" startIcon={<InfoRoundedIcon />}> Main </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton), }} onClick={() => changeContent('button2')} variant="contained" startIcon={<LocalHospitalRoundedIcon />}> Medical </Button>
            </Box>
            {content}
        </Box>
    );
};

export default ViewStudent;