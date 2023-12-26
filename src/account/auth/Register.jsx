import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { ColorModeContext,useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "../../account/auth/shared/Background";

const initialValues =  {
    email: "",
    password: "",

};

const userSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup
    .string()
    .required('Required')
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be at most 20 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 'Must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
});

const Register = () => {
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
              <Box m="20px" px="20%" py="10%">

                <Box mb="30px">
                    <Typography 
                      sx={{
                        color: '#333',
                        fontFamily: 'Poppins',
                        fontSize: '26px',
                        fontWeight: 700
                      }}>
                        Create Account
                    </Typography>
                    <Typography
                      sx={{
                        color: '#333',
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 400
                      }}>
                        Sign Up to Get Started
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
                              label="Firstname" 
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.firstname}
                              name="firstname" 
                              error={!!touched.firstname && !!errors.firstname}
                              helperText={touched.firstname && errors.firstname}
                              sx={{gridColumn: "span 3" } }
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonRoundedIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                        </Box>

                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                            <TextField
                              id="outlined"
                              type="text"
                              label="Lastname" 
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.lastname}
                              name="lastname" 
                              error={!!touched.lastname && !!errors.lastname}
                              helperText={touched.lastname && errors.lastname}
                              sx={{gridColumn: "span 3" } }
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonRoundedIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                        </Box>

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
                              Register
                          </Button>
                        </Box>
                    </form>
                  )}
                </Formik>

                <Box marginX="8%">
                  Already have an account?&nbsp;
                  <a href="/"
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      fontWeight: 400,
                      textDecoration: 'none',
                      gridColumn: "span 3",
                    }}>
                      Sign in here
                  </a>
                </Box>

              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default Register;