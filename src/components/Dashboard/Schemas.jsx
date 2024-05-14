import { Box, Card, CardHeader, Paper, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchemas } from "../../rtk/schemas";
import { useEffect } from "react";

const Schemas = () => {
  const dispatch = useDispatch();
  const schemas = useSelector((state) => state.schemas);
  useEffect(() => {
    dispatch(fetchSchemas());
  }, []);

  console.log(schemas);

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
            {schemas?.schemas.map((schema) => (
              <Paper
                key={schema.name}
                variant="outlined"
                sx={{ py: 2.5, textAlign: "center", borderStyle: "dashed" }}
              >
                {schema.name}
              </Paper>
            ))}
          </>
        ) : null}
      </Box>
    </Card>
  );
};

export default Schemas;
