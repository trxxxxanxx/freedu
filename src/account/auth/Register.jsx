import { Box, Button, TextField, Typography, Grid, useMediaQuery, InputAdornment, CssBaseline, ThemeProvider } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { ColorModeContext,useMode } from "../../theme";
import Background from "../../account/auth/shared/Background";
// Icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


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
            <Grid container>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Background />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box px={isNonMobile ? 20 : 10} py={isNonMobile ? 10 : 10}>

                  <Box mb='40px'>
                      <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '26px', fontWeight: 700 }}> Create Account </Typography>
                      <Typography sx={{ color: '#333', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400 }}> Sign Up to Get Started </Typography>
                  </Box>

                  <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema} >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) =>(
                      <form onSubmit={handleSubmit}>
                          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                              <TextField
                                id="firstname"
                                placeholder="Firstname"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstname}
                                name="firstname" 
                                error={!!touched.firstname && !!errors.firstname}
                                helperText={touched.firstname && errors.firstname}
                                sx={{ gridColumn: "span 3", '& .MuiOutlinedInput-root': { background: '#FFFFFF', color: '#6D6E70', borderColor: '#6D6E70', borderRadius: '50px', padding: 2, width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, height: '55px', }, }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start"> <PersonRoundedIcon /> </InputAdornment>
                                  ),
                                }}
                              />
                          </Box>

                          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                              <TextField
                                id="lastname"
                                placeholder="Lastname"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastname}
                                name="lastname" 
                                error={!!touched.lastname && !!errors.lastname}
                                helperText={touched.lastname && errors.lastname}
                                sx={{ gridColumn: "span 3", '& .MuiOutlinedInput-root': { background: '#FFFFFF', color: '#6D6E70', borderColor: '#6D6E70', borderRadius: '50px', padding: 2, width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, height: '55px', }, }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start"> <PersonRoundedIcon /> </InputAdornment>
                                  ),
                                }}
                              />
                          </Box>

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
                                      <InputAdornment position="start"> <LockRoundedIcon /> </InputAdornment>
                                    ),
                                  }}
                                />
                          </Box>

                          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" mb="15px" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
                            <Button 
                              href="/"
                              type="submit"
                              variant="contained"
                              sx={{ gridColumn: "span 3", color: '#fff', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, backgroundColor: '#8A70FF', borderRadius: '30px', paddingY: '12px', textTransform: 'capitalize', width: { xs: "250px", sm: "210px", md: "340px", lg: "360px" }, }}> Register </Button>
                          </Box>
                      </form>
                    )}
                  </Formik>

                  <Box ml={isNonMobile ? 6 : 4} mb='10px' style={{ position: 'relative', zIndex: 2 }}>
                    Already have an account?&nbsp; <a href="/" style={{ color: '#6D6E70', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, textDecoration: 'none',}}> Sign in here </a>
                  </Box>

                </Box>
              </Grid>

            </Grid>
          </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default Register;