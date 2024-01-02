import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { mockGrades } from "../../../data/mockDataFreEdu";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import profile2 from '../../../data/img/profile2.png';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ViewStudent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
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

    const [activeButton, setActiveButton] = useState('button1'); // Default active button
    const [content, setContent] = useState('');
    const changeContent = (buttonId) => {
        setActiveButton(buttonId); // Update the active button when clicked
    
        switch (buttonId) {
            case 'button1':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>

                </Box>
            );
            break;
            case 'button2':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>

                </Box>
            );
            break;
            case 'button3':
            setContent(
                <Box m="20px">
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        Voice List
                    </Typography>

                    <Button href="/admin/communicate/smartsend-voice/add" variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Add Voice
                    </Button>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
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
        setActiveButton(buttonId); // Update the active button when clicked
    
        switch (buttonId) {
            case 'main1':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>

                </Box>
            );
            break;
            case 'main2':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                    <Box display='flex' justifyContent='space-between' gap='50px'>
                        <Box style={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px', width: '50%'}}>
                            <Typography> Personal Information </Typography>
                        </Box>
                        <Box style={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px', width: '50%'}}>
                            <Typography> Personal Information </Typography>
                        </Box>
                    </Box>

                {/* <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box> */}

                </Box>
            );
            break;
            case 'main3':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>

                </Box>
            );
            break;
            case 'main4':
            setContent(
                <Box m="20px">

                <Box sx={{ backgroundColor: colors.freeduAccent[100], paddingTop: 4, paddingBottom: 2, paddingX: 4, marginY: 2, borderRadius: '20px' }}>

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
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

                    <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
                        {/* Profile */}
                        <Box display='flex' alignItems='center'>
                            <Box marginRight='30px'>
                                <img src={profile2}></img>
                            </Box>
                            <Box>
                                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold" mb="8px"> Maria Cruz </Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"500"}}> Contact: +63 09991234568</Typography>
                            </Box>
                            
                        </Box>
                        
                        {/* Tags */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Tags </Typography>
                            <Box display='flex'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> B.Ball </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Robotics </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px' }}>Girl Scout </Typography>
                            </Box>
                            <Box display='flex' marginTop='8px'>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Math Club </Typography>
                                <Typography  sx={{fontSize:'12px', backgroundColor: colors.freeduAccent[400], color:colors.freeduAccent[100], fontWeight:"400", px:'20px', textAlign:'center', borderRadius:'20px', marginRight: '5px'}}> Book Club </Typography>
                                <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                            </Box>
                        </Box>

                        {/* Last Login */}
                        <Box>
                            <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold"  mb="8px"> Last Login </Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                            <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                        </Box>
                    </Box>

                    <Box marginTop='30px'>
                        <a href="#" className="choice" onClick={() => changeMainContent('main1')} active >Grades</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main2')} >Personal Info</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main3')} >Account Settings</a>
                        <a href="#" className="choice" onClick={() => changeMainContent('main4')} >Documents</a>
                    </Box>
                </Box>

                <Box 
                m="40px 0 0 0" 
                height="60vh" 
                sx={{ 
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderBottom: "none",
                        backgroundColor: colors.freeduAccent[100],
                        padding: '20px',
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .name-column--cell": {
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.freeduAccent[100],
                        color: colors.freeduAccent[600],
                    },
                    "& .MuiDataGrid-vitualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.freeduAccent[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.freeduAccent[600]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.freeduAccent[600],
                        fontWeight: "bolder"
                    }
                }}
                >
                    <DataGrid 
                        checkboxSelection
                        rows={mockGrades}
                        columns={gradeColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>

            </Box>
        );
      }, []); // Run this effect only once when the component mounts


    return (
        <Box m="20px">
            <Box display="flex">
                <Button 
                    className="button" 
                    onClick={() => changeContent('button1')} 
                    variant="contained" startIcon={<InfoRoundedIcon />} 
                    sx={{
                        borderRadius: 4, 
                        pt: 3, 
                        pb:3, 
                        pl:3, pr:
                        16, 
                        mr:5, 
                        boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                        textTransform: 'Capitalize', 
                        backgroundColor: activeButton === 'button1' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                        color: activeButton === 'button1' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                        Main
                </Button>
                <Button 
                    className="button" 
                    onClick={() => changeContent('button2')} 
                    variant="contained" 
                    startIcon={<PsychologyRoundedIcon />} 
                    sx={{
                        borderRadius: 4, 
                        pt: 3, 
                        pb:3, 
                        pl:3, 
                        pr:16, 
                        mr:5, 
                        boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                        textTransform: 'Capitalize', 
                        backgroundColor: activeButton === 'button2' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                        color: activeButton === 'button2' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                        Counseling
                </Button>
                <Button 
                className="button" 
                onClick={() => changeContent('button3')} 
                variant="contained" 
                startIcon={<LocalHospitalRoundedIcon />} 
                sx={{
                    borderRadius: 4, 
                    pt: 3, 
                    pb:3, 
                    pl:3, 
                    pr:16, 
                    mr:5, 
                    boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                    textTransform: 'Capitalize', 
                    backgroundColor: activeButton === 'button3' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                    color: activeButton === 'button3' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                    Medical
                </Button>
            </Box>
            {content}
            
        </Box>
    );
};

export default ViewStudent;