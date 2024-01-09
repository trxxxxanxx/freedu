import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from "../../../style";
import { Button } from "@mui/material";
import Joinus from "../../../data/img/joinus.png";

const CallToAction = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = styles(colors);

  return (
    <Box
      width="100%"
      padding="20px"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Grid container item xs={12} style={{ flex: 1 }}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Joinus}
            alt="Join Us"
            style={{
              width: "auto", // Set the width to auto
              height: "auto", // Set the height
              maxWidth: "60%", // Set the maximum width to prevent exceeding the original size
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" fontWeight="800" color="white">
            Access All Features!
          </Typography>
          <Typography variant="h5" fontWeight="500" color="white" m="10px">
            Get special offers & news
          </Typography>
          <Button
            href=""
            variant="contained"
            sx={{
              ...classes.joinusButton, // Assuming classes.joinusButton contains your existing styles
              width: "80%", // Adjust the width as needed
            }}
          >
            <Typography variant="h5" fontWeight="800">
              Join Us Now
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallToAction;
