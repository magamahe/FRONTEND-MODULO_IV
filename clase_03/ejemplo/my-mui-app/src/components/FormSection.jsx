import { Box, Typography, TextField } from "@mui/material";
import Button from "./Button"; // tu botón reutilizable

export default function FormSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",      // ocupa toda la altura de la pantalla
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // centra verticalmente
        alignItems: "center",     // centra horizontalmente
        px: 2,                    // padding horizontal opcional
        backgroundColor: "#fdf6f0" // opcional: fondo pastel suave
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        📩 Publicar un aviso
      </Typography>

      <Box
        component="form"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,           // mantiene el form compacto
        }}
      >
        <TextField label="Título" fullWidth />
        <TextField label="Descripción" multiline rows={3} fullWidth />
        <TextField label="URL de la imagen" fullWidth />
        <Button type="submit">Publicar</Button>
      </Box>
    </Box>
  );
}

