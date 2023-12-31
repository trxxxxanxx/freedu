import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button, useMediaQuery, Modal, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import { useNavigate } from "react-router-dom";
import { mockSection } from "../../../data/mockDataFreEdu";
// Icons
import { IoIosAdd } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";
import { MdOutlineBookmark } from "react-icons/md";
import { HiChevronLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const ViewSection = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
      navigate(`/admin/enrollment/promote/grade/id/section`);
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
            field: "Student",
            headername: "Student", 
            flex: 1, 
        },
        { 
            field: "ContactPerson",
            headername: "Contact Person", 
            flex: 1, 
        },
        { 
            field: "ContactNumber",
            headername: "Contact Number", 
            flex: 1, 
        },
        { 
            field: "Email",
            headername: "Email", 
            flex: 1, 
        },
        { 
            field: "Grade",
            headername: "Grade", 
            flex: 1, 
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
    const promotingColumns = [
      { 
          field: "Student",
          headername: "Student", 
          flex: 1, 
      },
      { 
          field: "Grade",
          headername: "Grade", 
          flex: 1, 
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
              }}
            >
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </Box>
        ),
      },
  ];



    return (

        <Box m="40px">
            <Button href="/admin/enrollment/promote/grade/id" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" sx={classes.title}> Promote Students </Typography>
                <Box display='flex' gap='10px'>
                  {isSmallScreen ? (
                    <>
                    <IconButton onClick={handleOpen} sx={classes.addButton} > <MdOutlineBookmark /> </IconButton>
                    <IconButton sx={classes.addButton} > <IoIosAdd /> </IconButton>
                    </>
                  ) : (
                    <>
                    <Button onClick={handleOpen} variant="contained" startIcon={<MdOutlineBookmark />} sx={classes.addButton}> Promote </Button>
                    <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add </Button>
                    </>
                  )}
                </Box>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={classes.promoteModalBox}>
                        <Box sx={{ px:2, py: 1, borderBottom: '1px solid #E5E7E8'}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography id="modal-modal-title" variant="h5" fontWeight='bold'> Promote Student </Typography>
                            <IconButton onClick={handleClose} > <IoClose /> </IconButton>
                        </Box>
                        <Box sx={{ p:2}}>
                            <Box sx={classes.profileRoot} >
                                <DataGrid checkboxSelection rows={mockSection} columns={promotingColumns} components={{ Toolbar: GridToolbar }} />
                            </Box>
                            <Box display="flex" justifyContent="end">
                                <Button onClick={handleOpen} variant="contained" sx={classes.saveChangesButton}> Confirm </Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockSection} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default ViewSection;
