import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const SchemaDetails = () => {
  let { schemaId } = useParams();
  return (
    <Container maxWidth="xl">
     Schema Details {schemaId}
    </Container>
  );
};

export default SchemaDetails;
