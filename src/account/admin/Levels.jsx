import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, TextField, Modal, Button, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { styles } from '../../style';
import { mockLevels } from "../../data/mockDataFreEdu";
// Icons
import { IoClose } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { LuMoreHorizontal } from "react-icons/lu";

const Levels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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
            field: "LevelCategory",
            headername: "Level Category", 
            flex: 1, 
        },
        { 
          field: "LevelName",
          headername: "Level Name", 
          flex: 1, 
        },
        { 
          field: "LevelDescription",
          headername: "Level Description", 
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
                <Typography variant = "h4" sx={classes.title}> Levels </Typography>
                {isSmallScreen ? (
                  <IconButton onClick={handleOpen} sx={classes.addButton} > <IoIosAdd /> </IconButton>
                ) : (
                  <Button onClick={handleOpen} variant="contained" startIcon={<IoIosAdd />} sx={classes.addButton}> Add Level </Button>
                )}
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                    <Box sx={classes.modalBox}>
                        <Box sx={{ px:2, py: 1, borderBottom: '1px solid #E5E7E8'}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography id="modal-modal-title" variant="h5" fontWeight='bold'> Add Level </Typography>
                            <IconButton onClick={handleClose}> <IoClose /> </IconButton>
                        </Box>
                        <Box sx={{ p:2}}>
                            <Typography variant="h6"> Level Category </Typography>
                            <TextField id="outlined" required sx={classes.modalTextField} />
                            <Typography variant="h6" mt="20px"> Level Name </Typography>
                            <TextField id="outlined" required sx={classes.modalTextField} />
                            <Typography variant="h6" mt="20px"> Level Description </Typography>
                            <TextField id="outlined" required sx={classes.modalTextField} />
                            <Box display="flex" justifyContent="end">
                                <Button onClick={handleOpen} variant="contained" sx={classes.modalButton}> Create </Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </Box>
            <Box sx={classes.root} >
                <DataGrid checkboxSelection rows={mockLevels} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Levels;