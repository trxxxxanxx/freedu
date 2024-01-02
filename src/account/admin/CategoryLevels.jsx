import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockCategoryLevels } from "../../data/mockDataFreEdu";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Modal from '@mui/material/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px',
  };

const CategoryLevels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

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
            field: "CategoryName",
            headername: "Category Name", 
            flex: 1, 
        },
        { 
          field: "CategoryDescription",
          headername: "Category Description", 
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
                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                    Category Level
                </Typography>

                <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                    Add Category Level
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box sx={{ px:2, py: 1, borderBottom: '1px solid #E5E7E8'}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography id="modal-modal-title" variant="h5" fontWeight='bold'>
                                Add Category Level
                            </Typography>
                            <IconButton onClick={handleClose} >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ p:2}}>
                            <Typography variant="h6" component="h2">
                                Name
                            </Typography>
                            <TextField
                                id="outlined"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        background: colors.freeduAccent[100],
                                        color: colors.freeduAccent[700],
                                        fontWeight: 500,
                                        border: '1px solid #D0D4D9',
                                        borderRadius: '12px',
                                        paddingY: -2,
                                        width: '365px',
                                        height: '35px',
                                    },
                                }}
                            />
                            <Typography variant="h6" component="h2" marginTop="20px">
                                Description
                            </Typography>
                            <TextField
                                id="outlined"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        background: colors.freeduAccent[100],
                                        color: colors.freeduAccent[700],
                                        fontWeight: 500,
                                        border: '1px solid #D0D4D9',
                                        borderRadius: '12px',
                                        paddingY: -2,
                                        width: '365px',
                                        height: '35px',
                                    },
                                }}
                            />
                            <Box display="flex" justifyContent="end">
                                <Button onClick={handleOpen} variant="contained" sx={{borderRadius: 50, marginTop:2, padding: 1, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[1100], color: colors.freeduAccent[800]}}>
                                    Create
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </Box>

            <Box 
            m="40px 0 0 0" 
            height="60vh" 
            sx={{ 
                "& .MuiDataGrid-root": {
                    border: "none",
                    borderBottom: "none",
                    backgroundColor: colors.freeduAccent[100],
                    padding: '20px',
                },
                "& .MuiDataGrid-cell": {
                    color: colors.freeduAccent[600],
                },
                "& .name-column--cell": {
                    color: colors.freeduAccent[600],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.freeduAccent[100],
                    color: colors.freeduAccent[600],
                },
                "& .MuiDataGrid-vitualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.freeduAccent[100],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.freeduAccent[600]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: colors.freeduAccent[600],
                    fontWeight: "bolder"
                }
             }}
             >
                <DataGrid 
                    checkboxSelection
                    rows={mockCategoryLevels}
                    columns={columns} 
                    components={{ Toolbar: GridToolbar }}
                 />
            </Box>
        </Box>
    );
};

export default CategoryLevels;
