import { Box, Card, CardHeader, Paper, Skeleton, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchemas, setSelectedSchemaId } from "../../rtk/schemas";
import Iconify from "src/components/iconify";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Schemas = () => {
  const dispatch = useDispatch();
  const schemas = useSelector((state) => state.schemas);
  useEffect(() => {
    dispatch(fetchSchemas());
  }, []);

  const handleClick = (schema) => {
    dispatch(setSelectedSchemaId(schema._id));
  };

  

  return (
    <Card>
      <CardHeader title="Schemas List" />
      <Box
        sx={{
          p: 3,
          gap: 2,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {schemas.loading && (
          <>
            <Skeleton variant="rounded" width={150} height={60} />
            <Skeleton variant="rounded" width={150} height={60} />
            <Skeleton variant="rounded" width={150} height={60} />
            <Skeleton variant="rounded" width={150} height={60} />
            <Skeleton variant="rounded" width={150} height={60} />
            <Skeleton variant="rounded" width={150} height={60} />
          </>
        )}
        {!schemas.loading && schemas.schemas.length ? (
          <>
            {schemas?.schemas.map((schema, index) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{ py: 2.5, textAlign: "center", borderStyle: "dashed" }}
              >
                {schema.name}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  spacing={1.5}
                  justifyContent="flex-end"
                  sx={{
                    mt: 3,
                    color: "text.disabled",
                  }}
                >
                  <Link onClick={() => handleClick(schema)}>
                    <Iconify width={16} icon="eva:eye-fill" sx={{ mr: 0.5 }} />
                  </Link>
                  <Link to={`schema-details/${schema._id}`}>
                  <Iconify width={16} icon="eva:edit-outline" sx={{ mr: 0.5 }} />
                  </Link>
                </Stack>
              </Paper>
            ))}
          </>
        ) : null}
      </Box>
    </Card>
  );
};

export default Schemas;
