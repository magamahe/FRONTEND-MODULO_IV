// Button.jsx
import { Button as MUIButton } from "@mui/material";

export default function Button({ children, onClick, type = "button", variant = "contained", color = "primary", sx }) {
  return (
    <MUIButton
      onClick={onClick}
      type={type}
      variant={variant}
      color={color}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 500,
        ...sx, // permite agregar estilos extra cuando lo uses
      }}
    >
      {children}
    </MUIButton>
  );
}
