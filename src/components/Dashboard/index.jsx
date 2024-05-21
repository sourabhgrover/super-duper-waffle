import { Container, Grid, Typography } from "@mui/material";
import Schemas from "./Schemas";
import TableList from "./TableList";
import { useState } from "react";
import { useSelector } from "react-redux";

const DashboardView = () => {
  const selectedSchemaId = useSelector((state) => state.schemas.selectedSchemaId);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={5}>
          <Schemas  />
        </Grid>

        {selectedSchemaId && (
          <Grid item xs={12} md={6} lg={7}>
            <TableList />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default DashboardView;
