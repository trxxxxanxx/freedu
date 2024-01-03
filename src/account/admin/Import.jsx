import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockImport } from "../../data/mockDataFreEdu";
import { useTheme } from "@mui/material";
import { Button, useMediaQuery } from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { styles } from '../../style';

const Import = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
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
          field: "Grade",
          headername: "Grade", 
          flex: 1, 
        },
        { 
          field: "StudentID",
          headername: "Student ID", 
          flex: 1, 
        },
        { 
          field: "FormType",
          headername: "Form Type", 
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
        }
    ];


    return (

        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" sx={classes.title}> Import </Typography>
                {isSmallScreen ? (
                  <IconButton sx={classes.addButton} > <DownloadRoundedIcon /> </IconButton>
                ) : (
                  <Button variant="contained" startIcon={<DownloadRoundedIcon />} sx={classes.addButton}> Run Import </Button>
                )}
            </Box>
            <Box sx={classes.root}>
              <DataGrid checkboxSelection rows={mockImport} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }} className="custom-file-input">
                <label htmlFor="fileInput" className="file-input-label">
                    {selectedFile ? selectedFile.name : 'Choose File'}
                </label>
                <input
                    type="file"
                    id="fileInput"
                    className="file-input"
                    onChange={handleFileChange}
                />
            </Box>

        </Box>
    );
};


export default Import;