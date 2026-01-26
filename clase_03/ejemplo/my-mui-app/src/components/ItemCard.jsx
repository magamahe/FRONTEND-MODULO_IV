import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ItemCard({ titulo, descripcion, imagen }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={imagen}
        alt={titulo}
        sx={{
          height: 160,
          objectFit: "contain", // 👈 hace que la imagen se achique para entrar
          backgroundColor: "#f5f5f5",
        }}
      />
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}
