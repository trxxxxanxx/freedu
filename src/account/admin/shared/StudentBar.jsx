import React from 'react'
import { Box, Typography, TextField } from "@mui/material";
import { styles } from '../../../style';
import profile2 from '../../../data/img/profile2.png';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const StudentBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);


    return (
        <Box display="flex" alignItems="flex-start" justifyContent='space-between'>
            {/* Profile */}
            <Box display='flex' alignItems='center'>
                <Box marginRight='30px'>
                    <img src={profile2}></img>
                </Box>
                <Box>
                    <Typography variant = "h4" sx={classes.title}> Maria Cruz </Typography>
                    <Typography sx={classes.textStyle} style={{ color: colors.freeduAccent[300]}}> Age: 18&nbsp;&nbsp;<span>Sex: Female</span></Typography>
                    <Typography sx={classes.textStyle} style={{ color: colors.freeduAccent[300]}}> Contact: +63 09991234568</Typography>
                </Box>
            </Box>
            {/* Tags */}
            <Box>
                <Typography variant = "h4" sx={classes.title}  mb="8px"> Tags </Typography>
                <Box display='flex'>
                    <Typography  sx={classes.tags}> B.Ball </Typography>
                    <Typography  sx={classes.tags}> Robotics </Typography>
                    <Typography  sx={classes.tags}> Girl Scout </Typography>
                </Box>
                <Box display='flex' mt='8px'>
                    <Typography  sx={classes.tags}> Math Club </Typography>
                    <Typography  sx={classes.tags}> Book Club </Typography>
                    <Button sx={{ fontSize:'12px', backgroundColor: colors.freeduAccent[300], color:colors.freeduAccent[100], fontWeight:"400", px:'15px', py: 0, textAlign:'center', borderRadius:'20px', textTransform:'capitalize' }} > <AddRoundedIcon /> Add Tag </Button>
                </Box>
            </Box>
            {/* Last Login */}
            <Box>
                <Typography variant = "h4" sx={classes.title}  mb="8px"> Last Login </Typography>
                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Parent: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
                <Typography sx={{fontSize:'12px', color: colors.freeduAccent[300], fontWeight:"600"}}> Student: &nbsp;&nbsp;<span style={{ color: colors.freeduAccent[900]}}>Aug 23, 2023 11:34PM</span></Typography>
            </Box>
        </Box>  
    )
}

export default StudentBar