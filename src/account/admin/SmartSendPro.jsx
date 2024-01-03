import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { Button, useMediaQuery } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import VideoChatRoundedIcon from '@mui/icons-material/VideoChatRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AddIcon from '@mui/icons-material/Add';
import { mockSmartSendEmail, mockSmartSendSMS, mockSmartSendVoice, mockSmartSendGroup } from "../../data/mockDataFreEdu";
import { styles } from '../../style';

const SmartSendPro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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

    const [activeButton, setActiveButton] = useState('button1');
    const [content, setContent] = useState('');
    const changeContent = (buttonId) => {
        setActiveButton(buttonId);
        switch (buttonId) {
            case 'button1':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}> Email List </Typography>
                            {isSmallScreen ? (
                                <IconButton href="/admin/communicate/smartsend-email/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                            ) : (
                                <Button href="/admin/communicate/smartsend-email/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add Email </Button>
                            )}
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockSmartSendEmail} columns={emailColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'button2':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}> SMS/Text List </Typography>
                            {isSmallScreen ? (
                                <IconButton href="/admin/communicate/smartsend-sms/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                            ) : (
                                <Button href="/admin/communicate/smartsend-sms/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add SMS/Text </Button>
                            )}
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockSmartSendSMS} columns={SMSColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'button3':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}> Voice List </Typography>
                            {isSmallScreen ? (
                                <IconButton href="/admin/communicate/smartsend-voice/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                            ) : (
                                <Button href="/admin/communicate/smartsend-voice/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add Voice </Button>
                            )}
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockSmartSendVoice} columns={VoiceColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'button4':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}> Groups List </Typography>
                            {isSmallScreen ? (
                                <IconButton href="/admin/communicate/smartsend-group/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                            ) : (
                                <Button href="/admin/communicate/smartsend-group/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add Group </Button>
                            )}
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockSmartSendGroup} columns={GroupColumns} components={{ Toolbar: GridToolbar }} />
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
                    <Typography variant = "h4" sx={classes.title}> Email List </Typography>
                    {isSmallScreen ? (
                        <IconButton href="/admin/communicate/smartsend-email/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                    ) : (
                        <Button href="/admin/communicate/smartsend-email/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add Email </Button>
                    )}
                </Box>
                <Box sx={classes.root} >
                    <DataGrid checkboxSelection rows={mockSmartSendEmail} columns={emailColumns} components={{ Toolbar: GridToolbar }} />
                </Box>
            </Box>
        );
      }, []); 


    return (
        <Box m="20px">
            <Box display="flex">
            {isSmallScreen ? (
                <>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton) }} onClick={() => changeContent('button1')}> <EmailRoundedIcon /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton) }} onClick={() => changeContent('button2')}> <QuestionAnswerRoundedIcon /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button3' && classes.activeButton) }} onClick={() => changeContent('button3')}> <VideoChatRoundedIcon /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button4' && classes.activeButton) }} onClick={() => changeContent('button4')}> <GroupAddRoundedIcon /> </IconButton>
                </>
            ) : (
                <>
                <Button sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton) }} onClick={() => changeContent('button1')} variant="contained" startIcon={<EmailRoundedIcon />}> Email </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton) }} onClick={() => changeContent('button2')} variant="contained" startIcon={<QuestionAnswerRoundedIcon />}> SMS/Text </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button3' && classes.activeButton) }} onClick={() => changeContent('button3')} variant="contained" startIcon={<VideoChatRoundedIcon />}> Voice </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button4' && classes.activeButton) }} onClick={() => changeContent('button4')} variant="contained" startIcon={<GroupAddRoundedIcon />}> Groups </Button>
                </>
            )}
            </Box>
            {content}
        </Box>
    );
};

export default SmartSendPro;