import { useState } from "react";
import { Box, TextField, Typography, IconButton, useTheme, Button, useMediaQuery, Grid, Menu, MenuItem, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import { useNavigate } from "react-router-dom";
import { mockCompleteListing } from "../../../data/mockDataFreEdu";
// Icons
import { HiChevronLeft, HiMiniNoSymbol } from "react-icons/hi2";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";


const EditSmartSendGroup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const navigate = useNavigate();

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };
    const handleView = () => {
      console.log("View:", selectedRow);
      handleMenuClose();
    };
    const handleEdit = () => {
        console.log("Edit:", selectedRow);
        handleMenuClose();
    };
    const handleDelete = () => {
        console.log("Delete:", selectedRow);
        handleMenuClose();
    };
    const columns = [
        { 
            field: "Name",
            headername: "Name", 
            flex: 3, 
        },
        {
          field: "actions",
          headerName: "Actions",
          flex: 1,
          renderCell: (params) => (
            <Box>
              <IconButton
                aria-label="more"
                onClick={(e) => handleMenuClick(e, params.row)}
              >
                <LuMoreHorizontal />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                  },
              }}            >
                <MenuItem onClick={handleView}>View</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </Box>
          ),
        },
        
    ];

    return (
        <Box m='40px'>
            <Button href="/admin/communicate/smartsend-pro" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            <Typography variant = "h4" sx={classes.title}> Edit Group </Typography>

            <Box sx={classes.formBox}>
                <Typography variant = "h5" sx={classes.title}> Group Name </Typography>
                <TextField id="outlined" placeholder='Group Name' sx={classes.modalTextField} />
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={classes.formBox}>
                        <Typography variant = "h4" sx={classes.title}> Includes </Typography>
                        <Button sx={classes.include}>Active Parents with Immunization Due June tag&nbsp;&nbsp;<IoIosCloseCircle/></Button>
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} my='20px' gap='20px'>
                            <Box>
                                <Typography variant = "h5" sx={classes.title}> Person Type </Typography>
                                <TextField id="outlined-select" select placeholder='Person Type' sx={classes.shortFormTextfield} />
                            </Box>
                            <Box>
                                <Typography variant = "h5" sx={classes.title}> Status </Typography>
                                <TextField id="outlined-select" select placeholder='Select Status' sx={classes.shortFormTextfield} />
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
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
                                <TextField id="outlined" placeholder='Last name or Address' sx={classes.shortFormTextfield} />
                            </Box>
                        </Box>    
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb='20px' gap='20px'>
                            {isSmallScreen ? (
                                <Box display='flex'>
                                    <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                                    <Button variant="contained" startIcon={<HiMiniNoSymbol />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                                </Box>
                            ) : (
                                <Box display="flex">
                                    <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                                    <Button variant="contained" startIcon={<HiMiniNoSymbol />} sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={classes.formBox}>
                        <Typography variant = "h4" sx={classes.title} mb='20px'> Complete Listing </Typography>
                        <Box sx={classes.profileRoot} >
                            <DataGrid checkboxSelection rows={mockCompleteListing} columns={columns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[300]}}> Cancel </Button>
                <Button variant="contained" sx={classes.defaultButton} style={{backgroundColor: colors.freeduAccent[400]}}> Save </Button>
            </Box>
        </Box>
    )
}

export default EditSmartSendGroup;