import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import { mockSubmittedPayments, mockAutoPayPlan } from "../../data/mockDataFreEdu";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const Payments = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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

    const [activeButton, setActiveButton] = useState('button1'); // Default active button
    const [content, setContent] = useState('');
    const changeContent = (buttonId) => {
        setActiveButton(buttonId); // Update the active button when clicked
    
        switch (buttonId) {
            case 'button1':
            setContent(
                <Box m="20px">
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        Submitted Payments
                    </Typography>
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
                        rows={mockSubmittedPayments}
                        columns={paymentColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
                </Box>
            );
            break;
            case 'button2':
            setContent(
                <Box m="20px">
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                        AutoPay Plans
                    </Typography>
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
                        rows={mockAutoPayPlan}
                        columns={autopayColumns} 
                        components={{ Toolbar: GridToolbar }}
                    />
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
                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                  Submitted Payments
                </Typography>
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
                    rows={mockSubmittedPayments}
                    columns={paymentColumns} 
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
            </Box>
        );
      }, []); // Run this effect only once when the component mounts


    return (
        <Box m="20px">
            <Box display="flex">
                <Button 
                    className="button" 
                    onClick={() => changeContent('button1')} 
                    variant="contained" startIcon={<EmailRoundedIcon />} 
                    sx={{
                        borderRadius: 4, 
                        pt: 3, 
                        pb:3, 
                        pl:3, pr:
                        16, 
                        mr:5, 
                        boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                        textTransform: 'Capitalize', 
                        backgroundColor: activeButton === 'button1' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                        color: activeButton === 'button1' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                        Submitted Payments
                </Button>
                <Button 
                    className="button" 
                    onClick={() => changeContent('button2')} 
                    variant="contained" 
                    startIcon={<QuestionAnswerRoundedIcon />} 
                    sx={{
                        borderRadius: 4, 
                        pt: 3, 
                        pb:3, 
                        pl:3, 
                        pr:16, 
                        mr:5, 
                        boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
                        textTransform: 'Capitalize', 
                        backgroundColor: activeButton === 'button2' ? colors.freeduAccent[500] : colors.freeduAccent[100], 
                        color: activeButton === 'button2' ? colors.freeduAccent[800] : colors.freeduAccent[300]}}>
                        AutoPay Plans
                </Button>
            </Box>
            {content}
            
        </Box>
    );
};

export default Payments;