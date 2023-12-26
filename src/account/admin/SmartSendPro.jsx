import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import VideoChatRoundedIcon from '@mui/icons-material/VideoChatRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AddIcon from '@mui/icons-material/Add';
import { mockSmartSendEmail, mockSmartSendSMS, mockSmartSendVoice, mockSmartSendGroup } from "../../data/mockDataFreEdu";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const SmartSendPro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const emailColumns = [
        { 
            field: "EmailSubject",
            headername: "Email Subject", 
            flex: 1, 
        },
        { 
            field: "From",
            headername: "From", 
            flex: 1, 
        },
        { 
            field: "DateScheduled",
            headername: "Date Scheduled", 
            flex: 1, 
        },
        { 
            field: "DateSent",
            headername: "Date Sent", 
            flex: 1, 
        },
        { 
            field: "Status",
            headername: "Status", 
            flex: 1, 
        }
    ];
    const SMSColumns = [
        { 
            field: "SMSTextMessage",
            headername: "SMS/Text Message", 
            flex: 1, 
        },
        { 
            field: "DateScheduled",
            headername: "Date Scheduled", 
            flex: 1, 
        },
        { 
            field: "DateSent",
            headername: "Date Sent", 
            flex: 1, 
        },
        { 
            field: "Status",
            headername: "Status", 
            flex: 1, 
        }
    ];
    const VoiceColumns = [
        { 
            field: "VoiceLength",
            headername: "Voice Length", 
            flex: 1, 
        },
        { 
            field: "DateScheduled",
            headername: "Date Scheduled", 
            flex: 1, 
        },
        { 
            field: "DateSent",
            headername: "Date Sent", 
            flex: 1, 
        },
        { 
            field: "Status",
            headername: "Status", 
            flex: 1, 
        }
    ];
    const GroupColumns = [
        { 
            field: "GroupName",
            headername: "Group Name", 
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
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        Email List
                    </Typography>

                    <Button href="/admin/communicate/smartsend-email/add" variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Add Email
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
                        rows={mockSmartSendEmail}
                        columns={emailColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
                </Box>
            );
            break;
            case 'button2':
            setContent(
                <Box m="20px">
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        SMS/Text List
                    </Typography>

                    <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Add SMS/Text
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
                        rows={mockSmartSendSMS}
                        columns={SMSColumns} 
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

                    <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
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
                        rows={mockSmartSendVoice}
                        columns={VoiceColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
            );
            break;
            case 'button4':
            setContent(
                <Box m="20px">
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        Groups List
                    </Typography>

                    <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Add Group
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
                        rows={mockSmartSendGroup}
                        columns={GroupColumns} 
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
            
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                    Email List
                </Typography>

                <Button href="/admin/communicate/smartsend-email/add" variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                        Add Email
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
                    rows={mockSmartSendEmail}
                    columns={emailColumns} 
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
                    variant="contained" startIcon={<EmailRoundedIcon />} 
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
                        Email
                </Button>
                <Button 
                    className="button" 
                    onClick={() => changeContent('button2')} 
                    variant="contained" 
                    startIcon={<QuestionAnswerRoundedIcon />} 
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
                        SMS/Text
                </Button>
                <Button 
                className="button" 
                onClick={() => changeContent('button3')} 
                variant="contained" 
                startIcon={<VideoChatRoundedIcon />} 
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
                    Voice
                </Button>
                <Button 
                className="button" 
                onClick={() => changeContent('button4')} 
                variant="contained" 
                startIcon={<GroupAddRoundedIcon />} 
                sx={{
                    borderRadius: 4, 
                    pt: 3, 
                    pb:3, 
                    pl:3, 
                    pr:16, 
                    mr:5, 
                    boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                    textTransform: 'Capitalize', 
                    backgroundColor: activeButton === 'button4' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                    color: activeButton === 'button4' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                    Groups
                </Button>
            </Box>
            {content}
            
        </Box>
    );
};

export default SmartSendPro;