export const styles = (colors) => ({
  learnMoreLg: {
    position: 'absolute', 
    top: '56%', 
    left: '21%', 
    borderRadius: 50, 
    py: 1,
    px: 4,
    textTransform: 'Capitalize', 
    backgroundColor: '#8479EE', 
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
  learnMoreSm: {
    position: 'absolute', 
    top: '50%', 
    left: '40%', 
    borderRadius: 50, 
    py: 1,
    px: 4,
    textTransform: 'Capitalize', 
    backgroundColor: '#8479EE', 
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
  logoImg: {
    position: 'absolute', 
    top: '40%', 
    left: '10%'
  },
  root: {
    mt: "40px",
    height: "60vh",
    "& .MuiDataGrid-root": {
      border: "none",
      borderBottom: "none",
      backgroundColor: colors.freeduAccent[100],
<<<<<<< HEAD
      padding: "20px",
=======
      padding: '20px',
      borderRadius: '20px',
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
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
  profileRoot: {
    "& .MuiDataGrid-root": {
      border: "none",
      borderBottom: "none",
      backgroundColor: colors.freeduAccent[100],
      borderRadius: '20px',
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
    boxShadow: "0px 4px 12px 0px rgba(25, 27, 28, 0.06)",
    textTransform: "Capitalize",
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
  subtitle: {
    color: '#A3AED0', 
    textAlign: 'end',
  },
  addButton: {
    borderRadius: 50,
    padding: 1.5,
    textTransform: "Capitalize",
    backgroundColor: colors.freeduAccent[400],
    color: colors.freeduAccent[800],
  },
  joinusButton: {
    borderRadius: 50,
    padding: 1.5,
    textTransform: "capitalize",
    background: "white", // Set the background color
    color: colors.freeduAccent[400],
  },

  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: colors.freeduAccent[100],
    boxShadow: 50,
    borderRadius: "8px",
  },
  promoteModalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: colors.freeduAccent[100],
    boxShadow: 50,
    borderRadius: "8px",
    width: 600,
  },
  modalTextField: {
    "& .MuiOutlinedInput-root": {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
<<<<<<< HEAD
      // border: '1px solid #D0D4D9',
      borderColor: "#D0D4D9",
      borderRadius: "12px",
=======

      borderColor: '#D0D4D9',
      borderRadius: '12px',
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
      paddingY: -2,
      width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" },
      height: "35px",
      mt: "20px",
    },
  },
  modalButton: {
    borderRadius: 50,
    mt: 2,
    padding: 1,
    textTransform: "Capitalize",
    backgroundColor: colors.freeduAccent[1100],
    color: colors.freeduAccent[800],
  },
  backButton: {
    borderRadius: 50,
    padding: 1.5,
    textTransform: "Capitalize",
    backgroundColor: colors.freeduAccent[100],
    color: colors.freeduAccent[600],
    mb: "30px",
    mt: "-30px",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow: "none",
  },
  titleTextField: {
    "& .MuiOutlinedInput-root": {
      background: colors.freeduAccent[800],
      color: colors.freeduAccent[600],
      fontWeight: 700,
      border: "2px solid #6859FF",
      borderRadius: "50px",
      height: "46px",
      width: { xs: "300px", sm: "320px", md: "340px", lg: "360px" },
    },
  },
  defaultButton: {
    borderRadius: 50,
    mx: 1,
    padding: 1.5,
    textTransform: "Capitalize",
    color: colors.freeduAccent[800],
  },
  smallDefaultButton: {
    borderRadius: 50,
    padding: 1.5,
    textTransform: "Capitalize",
    color: colors.freeduAccent[800],
  },
  formTextfield: {
    "& .MuiOutlinedInput-root": {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
<<<<<<< HEAD
      // border: '1px solid #D0D4D9',
      borderColor: "#D0D4D9",
      borderRadius: "12px",
      paddingY: -2,
      width: { xs: "250px", sm: "210px", md: "250px", lg: "350px" },
      height: "35px",
      mt: "6px",
    },
=======
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
      paddingY: -2,
      width: { xs: "250px", sm: "210px", md: "250px", lg: "300px" },
      height: '35px',
      mt: '6px',
    }
  },
  xxsFormTextfield: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
      paddingY: -2,
      width: { xs: "100px", sm: "100px", md: "50px", lg: "70px" },
      height: '35px',
      mt: '6px',
    }
  },
  xsFormTextfield: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
      paddingY: -2,
      width: { xs: "230px", sm: "100px", md: "100px", lg: "100px" },
      height: '35px',
      mt: '6px',
    }
  },
  shortestFormTextfield: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
      paddingY: -2,
      width: { xs: "250px", sm: "200px", md: "150px", lg: "200px" },
      height: '35px',
      mt: '6px',
    }
  },
  shortFormTextfield: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
      paddingY: -2,
      width: { xs: "250px", sm: "210px", md: "250px", lg: "250px" },
      height: '35px',
      mt: '6px',
    }
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
  },
  longFormTextfield: {
    "& .MuiOutlinedInput-root": {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
<<<<<<< HEAD
      // border: '1px solid #D0D4D9',
      borderColor: "#D0D4D9",
      borderRadius: "12px",
=======
      borderColor: '#D0D4D9' ,
      borderRadius: '12px',
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
      paddingY: -2,
      width: { xs: "250px", sm: "210px", md: "450px", lg: "520px" },
      height: "35px",
      mt: "6px",
    },
  },
  formTextArea: {
    "& .MuiOutlinedInput-root": {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
<<<<<<< HEAD
      // border: '1px solid #D0D4D9',
      borderColor: "#D0D4D9",
      borderRadius: "12px",
=======
      borderColor: '#D0D4D9',
      borderRadius: '12px',
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
      paddingY: -2,
      mt: "6px",
    },
  },
  shortFormTextArea: {
    '& .MuiOutlinedInput-root': {
      background: colors.freeduAccent[100],
      color: colors.freeduAccent[700],
      fontWeight: 500,
      borderColor: '#D0D4D9',
      borderRadius: '12px',
      paddingY: -2,
      mt: '6px',
      width: { xs: "250px", sm: "210px", md: "450px", lg: "520px" },
    }
  },
  formBox: {
    backgroundColor: colors.freeduAccent[100],
    padding: 4,
    marginY: 2,
    borderRadius: "20px",
  },
  audioPlayer: {
    width: "500px",
    backgroundColor: "#E5E7E8",
    justifyContent: "center",
    color: "#1B2559",
    borderRadius: "30px",
    padding: "20px",
    border: "none",
    width: { xs: "250px", sm: "210px", md: "230px", lg: "250px" },
  },
  textStyle: {
    fontSize: "12px",
    fontWeight: "500",
  },
  tags: {
    fontSize: "12px",
    backgroundColor: colors.freeduAccent[400],
    color: colors.freeduAccent[100],
    fontWeight: "400",
    textAlign: "center",
    borderRadius: "20px",
  },
  addTags: {
    fontSize: "12px",
    backgroundColor: colors.freeduAccent[300],
    color: colors.freeduAccent[100],
    fontWeight: "400",
    px: "15px",
    py: 0,
    textAlign: "center",
    borderRadius: "20px",
    textTransform: "capitalize",
  },
  saveChangesButton: {
    borderRadius: 50,
    paddingY: 1,
    paddingX: 3,
    textTransform: "Capitalize",
    backgroundColor: colors.freeduAccent[400],
    color: colors.freeduAccent[800],
  },

  dashBox: {
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
    p: 1,
    backgroundColor: "#F0FFF8",
    color: "#18AB56",
    textTransform: "capitalize",
    fontWeight: 600,
    mt: "20px",
  },
  studentbarBox: {
    backgroundColor: colors.freeduAccent[100],
    paddingTop: 4,
    paddingBottom: 2,
    paddingX: 4,
    marginY: 2,
    borderRadius: "20px",
  },
  cardBox: {
    backgroundColor: colors.freeduAccent[100],
    borderRadius: "20px",
    padding: "20px",
  },
  cardTitle: {
    paddingBottom: "14px",
    borderBottom: "1px solid #E5E7E8",
    marginBottom: "5px",
  },
  cardAddBox: {
    backgroundColor: colors.freeduAccent[100],
    borderRadius: "20px",
  },
  cardAddButton: {
    borderRadius: 50,
    padding: 1,
    textTransform: "Capitalize",
    backgroundColor: colors.freeduAccent[1100],
    color: colors.freeduAccent[800],
  },
  tableTitle: {
    color: colors.freeduAccent[600],
    fontSize: "18px",
    fontWeight: 700,
    padding: "20px",
  },
  uploadProfile: {
    borderRadius: "160px",
    border: "1.5px solid #005CE8",
    backgroundColor: colors.freeduAccent[100],
    textTransform: "Capitalize",
    color: colors.freeduAccent[1100],
  },
<<<<<<< HEAD

=======
  news: {
    mt: '20px',
    p: '40px',
    border: '1.5px solid #E9ECEF',
    backgroundColor: colors.freeduAccent[100], 
    borderRadius: '16px',
  },
  newsTitle: {
    color: colors.freeduAccent[700],
    fontFamily: 'Noto Sans',
    fontSize: '36px',
    fontWeight: 700,
    mt: '20px'
  },
  newsParagraph: {
    pt: '6px',
    alignItems: 'flex-start',
    gap: '15px',
    alignSelf: 'stretch',
    fontSize: '16px',
    mb: '20px',
  },
  acads: {
    m: '20px',
    p: '40px',
    backgroundColor: colors.freeduAccent[100], 
    width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
  },
  acadsTitle: {
    color: colors.freeduAccent[700],
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: 700,
    mb: '12px'
  },
  acadsText: {
    color: colors.freeduAccent[700],
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 400,
  },
  acadsTextBold: {
    color: colors.freeduAccent[700],
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 700,
    textAlign: 'right',
  },
  acadsTextInactive: {
    color: colors.freeduAccent[300],
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 400,
    textAlign: 'right',
  },
  acadsRoot: {
    "& .MuiDataGrid-root": {
      borderRight: "none",
      borderLeft: "none",
      borderTop: '2px solid #000',
      borderBottom: '2px solid #000',
      borderRadius: '0px'
    },
    "& .MuiDataGrid-cell": {
      border: 'none',
      color: colors.freeduAccent[1300],
      fontFamily: 'Inter',
      fontSize: '12px',
      fontWeight: 600,
    },
    "& .MuiDataGrid-columnHeaders": {
      border: 'none',
      backgroundColor: colors.freeduAccent[100],
      color: colors.freeduAccent[1300],
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '900',
    },
    "& .MuiDataGrid-vitualScroller": {
      display: 'none',
    },
    "& .MuiDataGrid-footerContainer": {
      display: 'none',
    },
  },
  sidebarBox: {
    borderRadius: '24px', 
    background: 'var(--Gradients-Gradient-Style-1, linear-gradient(135deg, #868CFF 0%, #4318FF 100%))', 
    p: '30px', 
    m:'10px', 
    position: 'absolute', 
    bottom: '10px', 
  },
  upgradePro: {
    color: colors.freeduAccent[800], 
    whiteSpace: 'pre-line', 
    display: 'inline'
  },
>>>>>>> 453f39f65ec6288bd6a2c8db779db173e3170adc
});

