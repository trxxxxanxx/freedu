import { Box, Button, TextField, Typography } from "@mui/material";
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
    password: "",

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
                        Forgot Password?
                    </Typography>
                    <Typography
                      sx={{
                        color: '#333',
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 400
                      }}>
                        Enter  the email address associated with your account.
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
                              Send
                          </Button>
                        </Box>
                    </form>
                  )}
                </Formik>
                
                <Box marginX="25%">
                <a href="/"
                  style={{
                    color: '#333',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    gridColumn: "span 3",
                  }}>
                    Back to Login
                </a>
                </Box>
                
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default ForgotPassword;