import { Box, Typography } from "@mui/material";

export default function QuoteSection() {
  return (
    <Box
      component="section"
      sx={{
        my: 6,
        py: 4,
        textAlign: "center",
        backgroundColor: "primary.light",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        ✨ Cada objeto encontrado es una historia que vuelve a su dueño
      </Typography>
      <Typography variant="body1">
        Publicá, compartí y ayudemos a que todo vuelva a su lugar.
      </Typography>
    </Box>
  );
}
