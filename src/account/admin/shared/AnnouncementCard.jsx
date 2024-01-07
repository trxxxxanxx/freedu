import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from "../../../style";
import Announcement1 from "../../../data/img/Announcement1.png";
import Announcement2 from "../../../data/img/Announcement2.png";
import Announcement3 from "../../../data/img/Announcement3.png";

const AnnouncementCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = styles(colors);
    const backgrounds = [Announcement1, Announcement2, Announcement3];

  return (
    <Box width="100%" padding="20px" height="100%">
      <Grid item xs={12}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Announcement
          </Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} height="100%" paddingTop="30px">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-around"
          sx={{ gap: "16px" }}
        >
          <Grid item xs={4}>
            <Box
              height="100%"
              borderRadius={4}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${backgrounds[0]})`,
              }}
            ></Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" fontWeight="bold">
              Reminder: Parent and Teacher Conferences
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mt: { xs: 1, md: 1 },
                color: colors.freeduAccent[1300],
              }} /* Adjust margin-bottom for different screen sizes */
            >
              by John Doe
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-around"
          sx={{ gap: "16px" }}
        >
          <Grid item xs={4}>
            <Box
              height="100%"
              borderRadius={4}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${backgrounds[1]})`,
              }}
            ></Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" fontWeight="bold">
              Science Fair Participation
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mt: { xs: 1, md: 1 },
                color: colors.freeduAccent[1300],
              }} /* Adjust margin-bottom for different screen sizes */
            >
              by Sam Smith
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-around"
          sx={{ gap: "16px" }}
        >
          <Grid item xs={4}>
            <Box
              height="100%"
              borderRadius={4}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${backgrounds[2]})`,
              }}
            ></Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" fontWeight="bold">
              Book Fair Coming Soon!
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mt: { xs: 1, md: 1 },
                color: colors.freeduAccent[1300],
              }} /* Adjust margin-bottom for different screen sizes */
            >
              by William Lee
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnnouncementCard;
  