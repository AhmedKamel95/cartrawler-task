import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "utilities/theme";
import "assets/styles/index.scss";

const LandingPage = lazy(() => import("pages/Landing"));
const Layout = lazy(() => import("pages/Layout"));
const VehicleDetailsPage = lazy(() => import("pages/VehicleDetails"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vehicle-details" element={<VehicleDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);
