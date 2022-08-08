import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar } from "@mui/material";

import AppLogo from "assets/PartnerLogo/partner.svg";

const Header = () => (
  <AppBar position="relative">
    <Toolbar disableGutters>
      <Container maxWidth="lg">
        <Link to="/">
          <img src={AppLogo} alt="app-logo" />
        </Link>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
