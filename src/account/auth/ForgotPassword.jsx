import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ColorModeContext,useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "../../account/auth/shared/Background";

const initialValues =  {
    email: "",
};

const userSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Required")
});

const ForgotPassword = () => {
    const isNonMobile = useMediaQuery("(min-width:600px");
    const [theme, colorMode] = useMode();

    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">

            <Grid container>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Background />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box p={isNonMobile ? 20 : 10}>

                  <Box mb="40px">
                      <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '26px', fontWeight: 700 }}> Forgot Password? </Typography>
                      <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400 }}> Enter  the email address associated with your account. </Typography>
                  </Box>

                  <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema} >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) =>(
                      <form onSubmit={handleSubmit}>
                          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                              <TextField
                                id="email"
                                placeholder="Email"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email" 
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 3", '& .MuiOutlinedInput-root': { background: '#FFFFFF', color: '#6D6E70', borderColor: '#6D6E70', borderRadius: '50px', padding: 2, width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, height: '55px', }, }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start"> <MailOutlineIcon /> </InputAdornment>
                                  ),
                                }}
                              />
                          </Box>

                          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                            <Button 
                              href="/"
                              type="submit"
                              variant="contained"
                              sx={{ gridColumn: "span 3", color: '#fff', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, backgroundColor: '#8A70FF', borderRadius: '30px', paddingY: '12px', textTransform: 'capitalize', width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, }}> Send </Button>
                          </Box>
                      </form>
                    )}
                  </Formik>

                  <Box ml={isNonMobile ? 16 : 8} style={{ position: 'relative', zIndex: 2 }}>
                    <a href="/" style={{ color: '#6D6E70', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, textDecoration: 'none',  }}> Back to Login </a>
                  </Box>
                  
                </Box>
              </Grid>

            </Grid>

          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default ForgotPassword;