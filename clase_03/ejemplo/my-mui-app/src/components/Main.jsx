import { Container } from "@mui/material";
import CardSection from  "./CardSection";
import QuoteSection from "./QuoteSection";
import FormSection from "./FormSection";

export default function Main() {
  return (
    <Container sx={{ py: 4 }}>
      <CardSection />
      <QuoteSection />
      <FormSection />
    </Container>
  );
}
