import { useState, useEffect } from "react";
import { Box, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { styles } from '../../style';
import Email from "./smartsendpro/Email";
import SMS from "./smartsendpro/SMS";
import Voice from "./smartsendpro/Voice";
import Group from "./smartsendpro/Group";
// Icons
import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiMiniMegaphone } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";



const SmartSendPro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    const [activeButton, setActiveButton] = useState('button1');
    const [content, setContent] = useState('');
    const changeContent = (buttonId) => {
        setActiveButton(buttonId);
        switch (buttonId) {
            case 'button1':
                setContent(
                    <Email />
                );
            break;
            case 'button2':
                setContent(
                    <SMS />
                );
            break;
            case 'button3':
                setContent(
                    <Voice />
                );
            break;
            case 'button4':
                setContent(
                    <Group />
                );
            break;
            case 'default':
                setContent();
            break;
        }
    };

    useEffect(() => {
        setContent(
            <Email />
        );
      }, []); 


    return (
        <Box m="20px">
            <Box display="flex">
            {isSmallScreen ? (
                <>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton) }} onClick={() => changeContent('button1')}> <MdEmail /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton) }} onClick={() => changeContent('button2')}> <RiSendPlaneFill /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button3' && classes.activeButton) }} onClick={() => changeContent('button3')}> <HiMiniMegaphone /> </IconButton>
                <IconButton sx={{ ...classes.button, ...(activeButton === 'button4' && classes.activeButton) }} onClick={() => changeContent('button4')}> <FaUserCircle /> </IconButton>
                </>
            ) : (
                <>
                <Button sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton) }} onClick={() => changeContent('button1')} variant="contained" startIcon={<MdEmail />}> Email </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton) }} onClick={() => changeContent('button2')} variant="contained" startIcon={<RiSendPlaneFill />}> SMS/Text </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button3' && classes.activeButton) }} onClick={() => changeContent('button3')} variant="contained" startIcon={<HiMiniMegaphone />}> Voice </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button4' && classes.activeButton) }} onClick={() => changeContent('button4')} variant="contained" startIcon={<FaUserCircle />}> Groups </Button>
                </>
            )}
            </Box>
            {content}
        </Box>
    );
};

export default SmartSendPro;