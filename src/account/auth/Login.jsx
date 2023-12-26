import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { ColorModeContext,useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "../../account/auth/shared/Background";

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
            <Background />
            <main className="content">
              <Box m="20px" p="20%">

                <Box mb="30px">
                    <Typography 
                      sx={{
                        color: '#333',
                        fontFamily: 'Poppins',
                        fontSize: '26px',
                        fontWeight: 700
                      }}>
                        Sign In
                    </Typography>
                    <Typography
                      sx={{
                        color: '#333',
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 400
                      }}>
                        Welcome Back
                    </Typography>
                </Box>

                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={userSchema}
                >
                  {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) =>(
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                            <TextField
                              id="outlined"
                              type="text"
                              label="Email" 
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.email}
                              name="email" 
                              error={!!touched.email && !!errors.email}
                              helperText={touched.email && errors.email}
                              sx={{gridColumn: "span 3" } }
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailOutlineIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                        </Box>

                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                            <TextField
                                id="outlined"
                                type="text"
                                label="Password"  
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password" 
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{
                                  gridColumn: "span 3",
                                  // borderRadius: '30px',
                                  // backgroundColor: '#fff',
                                  border: '1px',
                                  borderColor: '#EEE',
                                  fontFamily: 'Poppins',
                                  color: '#EEE',
                                }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <KeyIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                        </Box>

                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                          <Button 
                            href="/admin/dashboard"
                            type="submit"
                            variant="contained"
                            sx={{
                              gridColumn: "span 3",
                              color: '#fff',
                              fontFamily: 'Poppins',
                              fontSize: '18px',
                              fontWeight: 400,
                              backgroundColor: '#8A70FF',
                              borderRadius: '30px',
                              paddingY: '12px',
                              textTransform: 'capitalize'
                            }}>
                              Login
                          </Button>
                        </Box>
                    </form>
                  )}
                </Formik>

                <Box marginX="15%" mb="10px">
                  No account?&nbsp;
                  <a href="/register"
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      fontWeight: 400,
                      textDecoration: 'none',
                      gridColumn: "span 3",
                    }}>
                      Sign up here
                  </a>
                </Box>

                <Box marginX="20%">
                  <a href="/forgot-password"
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      fontWeight: 400,
                      textDecoration: 'none',
                      gridColumn: "span 3",
                    }}>
                      Forgot Password
                  </a>
                </Box>

              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default Login;