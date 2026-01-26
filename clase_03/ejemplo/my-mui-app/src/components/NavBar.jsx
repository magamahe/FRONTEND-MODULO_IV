import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import Button from "./Button"; // <-- tu botón reutilizable

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
          <PetsIcon />
          <Typography variant="h6">Perdidos & Encontrados</Typography>
        </Box>

        <Button
          onClick={() => console.log("Login!")}
          variant="text"
          color="inherit"
        >
          Login
        </Button>

        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
