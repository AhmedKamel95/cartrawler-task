import { createTheme } from "@mui/material/styles";

const colours = {
  white: "#FFFFFF",
  black: "#333333",
  grey: "#EFEFEF",
};

export default createTheme({
  palette: {
    primary: {
      main: "#E6356F",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    allVariants: {
      color: colours.black,
    },
    h5: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          padding: "16px auto",
          fontWeight: "600",
          textTransform: "none",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: colours.white,
        },
      },
    },
  },
});
