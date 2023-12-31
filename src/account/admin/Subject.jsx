import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { styles } from '../../style';
import { mockSubject } from "../../data/mockDataFreEdu";
// Icons
import { LuMoreHorizontal } from "react-icons/lu";

const Subject = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);

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
          field: "Subject",
          headername: "Subject", 
          flex: 1, 
        },
        { 
          field: "Description",
          headername: "Description", 
          flex: 1, 
        },
        { 
          field: "Units",
          headername: "Units", 
          flex: 1, 
        },
        { 
          field: "DateUpdated",
          headername: "Date Updated", 
          flex: 1, 
        },
        { 
          field: "CreatedBy",
          headername: "Created By", 
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
              }}            >
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
              <Typography variant = "h4" sx={classes.title}> Created Subject </Typography>
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockSubject} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Subject;