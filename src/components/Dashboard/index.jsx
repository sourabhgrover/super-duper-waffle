import { Container, Grid, Typography } from "@mui/material";
import Schemas from "./Schemas";

const DashboardView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={5}>
          <Schemas />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          Table List
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardView;
