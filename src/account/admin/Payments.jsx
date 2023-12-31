import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { styles } from '../../style';
import { mockSubmittedPayments, mockAutoPayPlan } from "../../data/mockDataFreEdu";
// Icons
import { FaTag } from "react-icons/fa6";
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import { LuMoreHorizontal } from "react-icons/lu";



const Payments = () => {
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
    const paymentColumns = [
        { 
            field: "PayerName",
            headername: "Payer Name", 
            flex: 1, 
        },
        { 
            field: "Student",
            headername: "Student", 
            flex: 1, 
        },
        { 
            field: "Date",
            headername: "Date", 
            flex: 1, 
        },
        { 
            field: "Amount",
            headername: "Amount", 
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
    const autopayColumns = [
      { 
        field: "PayerName",
        headername: "Payer Name", 
        flex: 1, 
      },
      { 
          field: "Student",
          headername: "Student", 
          flex: 1, 
      },
      { 
          field: "Schedule",
          headername: "Schedule", 
          flex: 1, 
      },
      { 
          field: "MonthlyPayment",
          headername: "Monthly Payment", 
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

    const [activeButton, setActiveButton] = useState('button1');
    const [content, setContent] = useState('');
    
    const changeContent = (buttonId) => {
        setActiveButton(buttonId);
        switch (buttonId) {
            case 'button1':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}> Submitted Payments </Typography>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockSubmittedPayments} columns={paymentColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'button2':
                setContent(
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant = "h4" sx={classes.title}>  AutoPay Plans </Typography>
                        </Box>
                        <Box sx={classes.root} >
                            <DataGrid checkboxSelection rows={mockAutoPayPlan} columns={autopayColumns} components={{ Toolbar: GridToolbar }} />
                        </Box>
                    </Box>
                );
            break;
            case 'default':
                setContent();
            break;
        }
    };

    useEffect(() => {
        setContent(
            <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" sx={classes.title}> Submitted Payments </Typography>
                </Box>
                <Box sx={classes.root} >
                    <DataGrid checkboxSelection rows={mockSubmittedPayments} columns={paymentColumns} components={{ Toolbar: GridToolbar }} />
                </Box>
            </Box>
        );
      }, []);


    return (
        <Box m="20px">
            <Box display="flex">
                {isSmallScreen ? (
                    <>
                    <IconButton sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton) }} onClick={() => changeContent('button1')}> <FaTag /> </IconButton>
                    <IconButton sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton) }} onClick={() => changeContent('button2')}> <BeenhereRoundedIcon /> </IconButton>
                    </>
                ) : (
                    <>
                    <Button sx={{ ...classes.button, ...(activeButton === 'button1' && classes.activeButton), }} onClick={() => changeContent('button1')} variant="contained" startIcon={<FaTag />}> Submitted Payments </Button>
                <Button sx={{ ...classes.button, ...(activeButton === 'button2' && classes.activeButton), }} onClick={() => changeContent('button2')} variant="contained" startIcon={<BeenhereRoundedIcon />}> AutoPay Plans </Button>
                    </>
                )}
            </Box>
            {content}
        </Box>
    );
};

export default Payments;