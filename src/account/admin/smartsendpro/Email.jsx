import React from 'react'
import { useState } from "react";
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme, MenuItem, Menu } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import { mockSmartSendEmail } from "../../../data/mockDataFreEdu";
// Icons
import { IoIosAdd } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";

const Email = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

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
                <MenuItem onClick={handleView}>View</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </Box>
          ),
        },
    ];


  return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" sx={classes.title}> Email List </Typography>
                {isSmallScreen ? (
                    <IconButton href="/admin/communicate/smartsend-email/add" sx={classes.addButton} > <IoIosAdd /> </IconButton>
                ) : (
                    <Button href="/admin/communicate/smartsend-email/add" variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add Email </Button>
                )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockSmartSendEmail} columns={emailColumns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
  )
}

export default Email