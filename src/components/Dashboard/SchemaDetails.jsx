import { Container, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSchema } from "../../rtk/schemaDetails";

const SchemaDetails = () => {
  let { schemaId } = useParams();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
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
    console.log(formData);
    formData._id = schemaId;
    const res = dispatch(updateSchema(formData));
    
  };

  return (
    <Container maxWidth="xl">
      Schema Details {schemaId}
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SchemaDetails;
