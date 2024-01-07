import { Box, Grid, Typography, useTheme } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import backgroundImage1 from "../../data/img/news1.jpg";
import backgroundImage2 from "../../data/img/news2.jpg";
import backgroundImage3 from "../../data/img/news3.jpg";
import { tokens } from "../../theme";
import { styles } from "../../style";
import TodoList from "./shared/TodoList";
import AnnouncementCard from "./shared/AnnouncementCard";
import CallToAction from "./shared/CallToAction";




const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = styles(colors);
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];
  const backgroundStyle = {
    background: `linear-gradient(135deg, #868CFF 0%, #4318FF 50%), url(${backgroundImage1}), url(${backgroundImage2}), url(${backgroundImage3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 -100px 120px rgba(0, 0, 0, 0.5)",
  };

  return (
    <Box m={{ xs: "20px", sm: "30px", md: "40px", lg: "60px" }} mx="auto">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Grid container spacing={2}>
        {/* ROW 1 */}
        {/* NEWS */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={6}
            height="auto"
          >
            {/* Content */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box
                  sx={{ ...classes.dashBox, ...backgroundStyle }}
                  style={{
                    backgroundImage: `url(${backgrounds[0]})`,
                  }}
                >
                  <Box
                    m={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
                    }} /* Adjust margin for different screen sizes */
                  >
                    <Typography
                      variant="h4"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 1, md: 1 },
                      }} /* Adjust margin-bottom for different screen sizes */
                    >
                      School Appreciation
                    </Typography>

                    <Typography
                      variant="h5"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 2, md: 3 },
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <ScheduleIcon
                        sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
                      />
                      14 Nov, 2024
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box
                  sx={{ ...classes.dashBox, ...backgroundStyle }}
                  style={{
                    backgroundImage: `url(${backgrounds[1]})`,
                  }}
                >
                  <Box
                    m={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
                    }} /* Adjust margin for different screen sizes */
                  >
                    <Typography
                      variant="h4"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 1, md: 1 },
                      }} /* Adjust margin-bottom for different screen sizes */
                    >
                      School Appreciation
                    </Typography>

                    <Typography
                      variant="h5"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 2, md: 3 },
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <ScheduleIcon
                        sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
                      />
                      14 Nov, 2024
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  backgroundColor={colors.primary[900]}
                  borderRadius={6}
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                  style={{
                    ...backgroundStyle,
                    backgroundImage: `url(${backgrounds[2]})`, // Use the first image initially
                  }}
                >
                  <Box
                    m={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
                    }} /* Adjust margin for different screen sizes */
                  >
                    <Typography
                      variant="h4"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 1, md: 1 },
                      }} /* Adjust margin-bottom for different screen sizes */
                    >
                      School Appreciation
                    </Typography>

                    <Typography
                      variant="h5"
                      color={theme.palette.grey[100]}
                      fontWeight="bold"
                      sx={{
                        mb: { xs: 2, md: 3 },
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <ScheduleIcon
                        sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
                      />
                      14 Nov, 2024
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* END NEWS */}

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={6}
            height={{ xs: "300px", sm: "320px", md: "340px", lg: "360px" }}
          >
            {/* Content */}
            CALENDAR
          </Box>
        </Grid>
        {/* ROW 1 END */}

        {/* ROW 2 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={6}
            height="auto"
          >
            {/* Content */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                  backgroundColor={colors.freeduAccent[100]}
                  borderRadius={6}
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                  boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
                >
                  <TodoList
                    style={{
                      marginTop: "auto", // or marginBottom: "auto"
                      /* Add any other styles as needed */
                    }}
                  />
                  {/* TASK */}
                </Box>
              </Grid>

              {/* ANNOUNCEMENT CARD */}
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                  backgroundColor={colors.freeduAccent[100]}
                  borderRadius={6}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  height={{
                    xs: "auto",
                    sm: "autopx",
                    md: "340px",
                    lg: "360px",
                  }}
                  boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
                >
                  <AnnouncementCard />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          order={{ md: 1, sm: 1, xs: 1, lg: 2 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
              borderRadius: 6,
            }}
            height={{ xs: "300px", sm: "320px", md: "340px", lg: "360px" }}
          >
            {/* Content */}
            <CallToAction />
          </Box>
        </Grid>
        {/* ROW 2 END*/}
      </Grid>
    </Box>
  );
};

export default Dashboard;
