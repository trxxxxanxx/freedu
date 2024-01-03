import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={{ xs: "20px", sm: "30px", md: "40px", lg: "60px" }} mx="auto">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Grid container spacing={2}>
        {/* ROW 1 */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={6}
            height={{ xs: "300px", sm: "320px", md: "340px", lg: "360px" }}
          >
            {/* Content */}
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4} lg={4}>
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
                        mb: { xs: 2, md: 3 },
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
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Box
                  backgroundColor="GREEN"
                  borderRadius={6}
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                ></Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Box
                  backgroundColor="GREEN"
                  borderRadius={6}
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
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

        {/* ROW 3 */}
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
            backgroundColor={colors.primary[400]}
            // p={{ xs: "20px", sm: "25px", md: "30px", lg: "40px" }}
            borderRadius={6}
            height={{ xs: "300px", sm: "320px", md: "340px", lg: "360px" }}
          >
            {/* Content */}
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Box
                  backgroundColor="GREEN"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={6}
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                >
                  TASK
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Box
                  backgroundColor="GREEN"
                  borderRadius={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={{
                    xs: "300px",
                    sm: "320px",
                    md: "340px",
                    lg: "360px",
                  }}
                >
                  ANNOUNCEMENT
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
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
            JOIN NOW
            {/* Co NOntent */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
