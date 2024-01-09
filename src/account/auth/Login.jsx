import { Box, Button, TextField, Typography, Grid, CssBaseline, ThemeProvider, useMediaQuery, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { ColorModeContext,useMode } from "../../theme";
import Background from "../../account/auth/shared/Background";
// Icons
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const initialValues =  {
    email: "",
    password: "",

};

const userSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup
    .string()
    .required('Required')
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be at most 20 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 'Must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
});

const Login = () => {
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

                      <Box mb='40px'>
                          <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '26px', fontWeight: 700 }}> Sign In </Typography>
                          <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400 }}> Welcome Back </Typography>
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
                                        <InputAdornment position="start"> <MdOutlineEmail size={20} color="#B6B6B6"/> </InputAdornment>
                                      ),
                                    }}
                                  />
                              </Box>

                              <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                                  <TextField
                                      id="password"
                                      placeholder="Password"
                                      type="text"
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.password}
                                      name="password" 
                                      error={!!touched.password && !!errors.password}
                                      helperText={touched.password && errors.password}
                                      sx={{ gridColumn: "span 3", '& .MuiOutlinedInput-root': { background: '#FFFFFF', color: '#6D6E70', borderColor: '#6D6E70', borderRadius: '50px', paddingY: 2, width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, height: '55px', }, }}
                                      InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start"> <FaLock size={18} color="#B6B6B6"/> </InputAdornment>
                                        ),
                                      }}
                                    />
                              </Box>

                              <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                                <Button 
                                  href="/admin/dashboard"
                                  type="submit"
                                  variant="contained"
                                  sx={{ gridColumn: "span 3", color: '#fff', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, backgroundColor: '#8A70FF', borderRadius: '30px', paddingY: '12px', textTransform: 'capitalize', width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, }}> Login </Button>
                              </Box>
                          </form>
                        )}
                      </Formik>
                      
                      <Box ml={isNonMobile ? 12 : 4} mb='10px' style={{ position: 'relative', zIndex: 2 }}>
                        No account?&nbsp; <a href="/register" style={{ color: '#6D6E70', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, textDecoration: 'none',}}> Sign up here </a>
                      </Box>

                      <Box ml={isNonMobile ? 16 : 8} style={{ position: 'relative', zIndex: 2 }}>
                        <a href="/forgot-password" style={{ color: '#6D6E70', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, textDecoration: 'none',  }}> Forgot Password </a>
                      </Box>

                    </Box>

                </Grid>
                
              </Grid>

            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Login;