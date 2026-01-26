import { CssBaseline, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />

        {/* Main crece y empuja el footer */}
        <Box component="main" sx={{ flex: 1 }}>
          <Main />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
