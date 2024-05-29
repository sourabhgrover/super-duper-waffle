import { useLocation } from "react-router-dom";
import React from "react";
import { Box, Card, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useSelector } from "react-redux";
import Iconify from "src/components/iconify";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TableDetails = () => {
  const location = useLocation();
  const { data } = useSelector((state) => state.tableList);
  const tableData = data.find((item) => item._id === location.state.id);
  console.log(tableData);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Table Details:
      </Typography>
      <Card>
        <Box
          sx={{
            p: 3,
            // gap: 2,
            // display: "grid",
            // gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Table Name:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{tableData.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Catalog Name:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{tableData.catalog_name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Schema Name:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{tableData.schema_name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Generation:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{tableData.generation}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Table Type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{tableData.table_type}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  expandIcon={<Iconify icon="eva:more-vertical-fill" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">Columns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Type Text</TableCell>
                          <TableCell align="right">Type Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.columns.map((column) => (
                          <TableRow
                            key={column.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {column.name}
                            </TableCell>
                            <TableCell align="right">{column.type_text}</TableCell>
                            <TableCell align="right">{column.type_name}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default TableDetails;
