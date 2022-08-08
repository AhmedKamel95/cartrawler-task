import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

import { Header, Footer } from "components";
import "assets/styles/Layout.scss";

const Layout: React.FC = (): JSX.Element => (
  <>
    <Header />

    <Box className="site-container">
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>

    <Footer />
  </>
);

export default Layout;
