import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button, useMediaQuery, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { styles } from '../../../style';
import { useNavigate } from "react-router-dom";
import { mockExamType } from "../../../data/mockDataFreEdu";
// Icons
import { HiChevronLeft } from "react-icons/hi2";
import { LuMoreHorizontal } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

const ViewExams = () => {
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
    const handleAdd = () => {
      console.log("Add:", selectedRow);
      const { type } = selectedRow;
      navigate(`/admin/account/student/exams/${type}/add`);
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
            flex: 1, 
        },
        { 
            field: "Description",
            headername: "Description", 
            flex: 1, 
        },
        { 
            field: "DateAdded",
            headername: "Date Added", 
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
                <MenuItem onClick={handleAdd}>Add</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </Box>
          ),
        },
        
    ];

    return (

        <Box m="40px">
            <Button href="/admin/account/student/id" variant="contained" startIcon={<HiChevronLeft />} sx={classes.backButton}> Back </Button>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" sx={classes.title}> Exam Type List </Typography>
                {isSmallScreen ? (
                  <IconButton href="" sx={classes.addButton} > <IoIosAdd /> </IconButton>
                ) : (
                  <Button href="" variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton} > Add Exam Type </Button>
                )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockExamType} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default ViewExams;