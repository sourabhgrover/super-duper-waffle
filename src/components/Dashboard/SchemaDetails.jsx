import { Container, TextField, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSchemaDetails, updateSchema } from "../../rtk/schemaDetails";

const SchemaDetails = () => {
  let { schemaId } = useParams();
  const dispatch = useDispatch();
  const { schemas } = useSelector((state) => state.schemas);
  const { loading, schemaDetails } = useSelector(
    (state) => state.schemaDetails
  );

  useEffect(() => {
    const selectedSchema = schemas.find((schema) => schema._id === schemaId);
    if (selectedSchema) {
      dispatch(setSchemaDetails(selectedSchema));
    }
  }, [schemaId]);
  useEffect(() => {
    if (schemaDetails) {
      setFormData({
        name: schemaDetails?.customCatalog?.name || schemaDetails?.name || "",
        catalog_name:
          schemaDetails?.customCatalog?.catalog_name ||
          schemaDetails?.catalog_name ||
          "",
        owner:
          schemaDetails?.customCatalog?.owner || schemaDetails?.owner || "",
      });
    }
  }, [schemaDetails]);
  const [formData, setFormData] = useState({
    name: schemaDetails?.customCatalog?.name || schemaDetails?.name || "",
    catalog_name: "",
    owner: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data

    formData._id = schemaId;
    dispatch(updateSchema(formData));
  };

  return (
    <Container maxWidth="xl">
      Schema Details:
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Catalog Name"
          variant="outlined"
          fullWidth
          name="catalog_name"
          value={formData.catalog_name}
          onChange={handleChange}
        />
        <TextField
          label="Owner"
          variant="outlined"
          fullWidth
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Loading.." : "Submit"}
        </Button>
      {/* </form> */}
      </Box>
    </Container>
  );
};

export default SchemaDetails;
