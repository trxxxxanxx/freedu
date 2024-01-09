import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { styles } from '../../style';
import { mockParent } from "../../data/mockDataFreEdu";
// Icons
import { IoIosAdd } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";

const Parent = () => {
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
          headerName: "Name", 
          flex: 1, 
      },
      { 
        field: "Email",
        headerName: "Email", 
        flex: 1, 
      },
      { 
        field: "ContactNumber",
        headerName: "Contact Number", 
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
                <Typography variant = "h4" sx={classes.title}> Parent </Typography>
                {isSmallScreen ? (
                  <IconButton sx={classes.addButton} > <IoIosAdd /> </IconButton>
                ) : (
                  <Button variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add Parent </Button>
                )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockParent} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Parent;