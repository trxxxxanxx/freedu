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
      width: { xs: "250px", sm: "210px", md: "480px", lg: "400px" },
      height: '35px',
      mt: '20px',
    },
  },
  modalButton: {
    borderRadius: 50, 
    mt:2, 
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
    mb: '30px', 
    mt: '-30px', 
    fontSize: '14px', 
    fontWeight: 700, 
    boxShadow: 'none'
  },
  titleTextField: {
    '& .MuiOutlinedInput-root': {
        background: colors.freeduAccent[800],
        color: colors.freeduAccent[300],
        fontWeight: 700,
        border: '2px solid #6859FF',
        borderRadius: '50px',
        height: '46px',
        width: { xs: "300px", sm: "320px", md: "340px", lg: "360px" },
      },
  },
  defaultButton: {
    borderRadius: 50, 
    mx:1, 
    padding: 1.5, 
    textTransform: 'Capitalize', 
    color: colors.freeduAccent[800],
  },
  smallDefaultButton: {
    borderRadius: 50, 
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
      width: { xs: "250px", sm: "210px", md: "230px", lg: "250px" },
      height: '35px',
      mt: '20px',
    }
  },
  formBox: {
    backgroundColor: colors.freeduAccent[100], 
    padding: 4, 
    marginY: 2, 
    borderRadius: '20px',
  },
  audioPlayer: {
    width: '500px',
    backgroundColor: '#E5E7E8',
    justifyContent: 'center',
    color: '#1B2559',
    borderRadius: '30px',
    padding: '20px',
    border: 'none',
    width: { xs: "250px", sm: "210px", md: "230px", lg: "250px" },
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
    textAlign:'center', 
    borderRadius:'20px', 
  },
  addTags: {
    fontSize: '12px',
    backgroundColor: colors.freeduAccent[300],
    color: colors.freeduAccent[100],
    fontWeight: "400",
    px: '15px',
    py: 0,
    textAlign: 'center',
    borderRadius: '20px',
    textTransform: 'capitalize',
  },
  saveChangesButton: {
    borderRadius: 50, 
    paddingY: 1, 
    paddingX: 3, 
    textTransform: 'Capitalize', 
    backgroundColor: colors.freeduAccent[400], 
    color: colors.freeduAccent[800],
  },

  dashBox : { 
    display: "flex",
    alignItems: "flex-end",
    borderRadius: 6,
    height: {
    xs: "300px",
    sm: "320px",
    md: "340px",
    lg: "360px",
    },
  },
  include: {
    p:1, 
    backgroundColor: '#F0FFF8', 
    color: '#18AB56', 
    textTransform: 'capitalize', 
    fontWeight: 600,
    mt: '20px',
  },
  studentbarBox: {
    backgroundColor: colors.freeduAccent[100], 
    paddingTop: 4, 
    paddingBottom: 2, 
    paddingX: 4, 
    marginY: 2, 
    borderRadius: '20px'
  },
  cardBox: {
    backgroundColor: colors.freeduAccent[100], 
    borderRadius: '20px', 
    width: '50%', 
    padding: '20px', 
    marginRight: '50px',
  },
  cardTitle: {
    padding:'0px 0px 14px 0px',
    borderBottom:'1px solid #E5E7E8',
    marginBottom:'5px'
  },
});

