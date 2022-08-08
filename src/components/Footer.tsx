import { Typography, Box, Link } from "@mui/material";
import "assets/styles/Layout.scss";

const Footer = () => (
  <Box className="footer" component="footer">
    <Typography align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://corporate.cartrawler.com/en-gb/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Cartrawler
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </Box>
);

export default Footer;
