import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSchoolNews } from "../../data/mockDataFreEdu";
import { useTheme } from "@mui/material";
import { Button, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useNavigate } from "react-router-dom";
import { styles } from '../../style';


const SchoolNews = () => {
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
      navigate(`/admin/communicate/school-news/id`);
      handleMenuClose();
    };
    const handleEdit = () => {
        console.log("Edit:", selectedRow);
        navigate(`/admin/communicate/school-news/edit/`);
        handleMenuClose();
    };
    const handleDelete = () => {
        console.log("Delete:", selectedRow);
        handleMenuClose();
    };
    const columns = [
        { 
            field: "Title",
            headername: "Title", 
            flex: 1, 
        },
        { 
            field: "PostingDate",
            headername: "Posting Date", 
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
                <Typography variant = "h4" sx={classes.title}> School News </Typography>
                {isSmallScreen ? (
                  <IconButton href="/admin/communicate/school-news/add" sx={classes.addButton} > <AddIcon /> </IconButton>
                ) : (
                  <Button href="/admin/communicate/school-news/add" variant="contained" startIcon={<AddIcon />} sx={classes.addButton} > Add News </Button>
                )}
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockDataSchoolNews} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default SchoolNews;