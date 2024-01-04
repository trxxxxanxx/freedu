import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockProspects } from "../../data/mockDataFreEdu";
import { useTheme } from "@mui/material";
import { Button, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { styles } from '../../style';


const Prospects = () => {
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
                <MoreHorizRoundedIcon />
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
                <Typography variant = "h4" sx={classes.title}> Prospective Student </Typography>
                {isSmallScreen ? (
                  <IconButton href="/admin/enrollment/prospects/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                ) : (
                  <Button href="/admin/enrollment/prospects/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton}> Add Prospect </Button>
                  )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockProspects} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Prospects;