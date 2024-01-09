import React from 'react'
import { useState } from "react";
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme, MenuItem, Menu } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import { useNavigate } from "react-router-dom";
import { mockSmartSendGroup } from "../../../data/mockDataFreEdu";
// Icons
import { IoIosAdd } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";

const Group = () => {
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
        navigate(`/admin/communicate/smartsend-group/edit`);
        handleMenuClose();
    };
    const handleDelete = () => {
        console.log("Delete:", selectedRow);
        handleMenuClose();
    };

    const GroupColumns = [
        { 
            field: "GroupName",
            headername: "Group Name", 
            flex: 4, 
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
                <Typography variant = "h4" sx={classes.title}> Groups List </Typography>
                {isSmallScreen ? (
                    <IconButton href="/admin/communicate/smartsend-group/add" sx={classes.addButton} > <IoIosAdd /> </IconButton>
                ) : (
                    <Button href="/admin/communicate/smartsend-group/add" variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add Group </Button>
                )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockSmartSendGroup} columns={GroupColumns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
  )
}

export default Group