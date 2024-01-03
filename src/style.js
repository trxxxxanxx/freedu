export const styles = (colors) => ({
  root: {
    mt: "40px",
    height: "60vh",
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
      backgroundColor: colors.primary[400],
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
      fontWeight: "bolder",
    },
  },
  button: {
    borderRadius: 4,
    p: 3,
    ml: 3,
    ml: {xs: "20px", sm: "30px", md: "40px", lg: "60px"},
    boxShadow: '0px 4px 12px 0px rgba(25, 27, 28, 0.06)',
    textTransform: 'Capitalize',
    backgroundColor: colors.freeduAccent[100],
    color: colors.freeduAccent[300],
  },
  activeButton: {
    backgroundColor: colors.freeduAccent[500],
    color: colors.freeduAccent[800],
  },
  title: {
    color: colors.freeduAccent[600],
    fontWeight: "bold",
  },
  addButton: {
    borderRadius: 50, 
    padding: 1.5, 
    textTransform: 'Capitalize', 
    backgroundColor: colors.freeduAccent[400], 
    color: colors.freeduAccent[800]
  },
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: colors.freeduAccent[100],
    boxShadow: 50,
    borderRadius: '8px',
  },
  modalTextField: {
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
  },
  modalButton: {
    borderRadius: 50, 
    marginTop:2, 
    padding: 1, 
    textTransform: 'Capitalize', 
    backgroundColor: colors.freeduAccent[1100], 
    color: colors.freeduAccent[800],
  },
  backButton: {
    borderRadius: 50,  
    padding: 1.5, 
    textTransform: 'Capitalize', 
    backgroundColor: colors.freeduAccent[100], 
    color: colors.freeduAccent[600], 
    marginBottom: '30px', 
    marginTop: '-30px', 
    fontSize: '14px', 
    fontWeight: 700, 
    boxShadow: 'none'
  },
  titleTextField: {
    width: '30%',
    mb: 2,
    '& .MuiOutlinedInput-root': {
        color: colors.freeduAccent[700],
        fontWeight: 700,
        border: '2px solid #6859FF',
        borderRadius: '50px',
        paddingY: -2,
      },
  },
  defaultButton: {
    borderRadius: 50, 
    mx:1, 
    padding: 1.5, 
    textTransform: 'Capitalize', 
    color: colors.freeduAccent[800],
  },
  formTextfield: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      border: '1px solid #D0D4D9',
      borderRadius: '12px',
      paddingY: -2,
      width: '243px',
      height: '35px',
    }
  },
  audioPlayer: {
    width: '500px',
    backgroundColor: '#E5E7E8',
    justifyContent: 'center',
    color: '#1B2559',
    borderRadius: '30px',
    padding: '20px',
    border: 'none',
  },
  textStyle: {
    fontSize:'12px',
    fontWeight:"500",
  },
  tags: {
    fontSize:'12px', 
    backgroundColor: colors.freeduAccent[400], 
    color:colors.freeduAccent[100], 
    fontWeight:"400", 
    px:'20px', 
    textAlign:'center', 
    borderRadius:'20px', 
    marginRight: '5px'
  },
  saveChangesButton: {
    borderRadius: 50, 
    paddingY: 1, 
    paddingX: 3, 
    textTransform: 'Capitalize', 
    backgroundColor: colors.freeduAccent[400], 
    color: colors.freeduAccent[800],
  },
  sidebarButton: {
    textTransform: 'Capitalize',
    color: colors.freeduAccent[600],
  },
  sidebarActiveButton: {
    borderRight: '4px solid #4318FF',
    color: colors.freeduAccent[300],
  },
  customText: {
    fontSize: '18px',
    fontWeight: '700',
  },
});
