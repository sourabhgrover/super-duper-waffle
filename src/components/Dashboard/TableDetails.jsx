import { useDispatch, useSelector } from "react-redux";
import { fetchTableList } from "../../rtk/tableList";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import UserTableHead from "../user-table-head";
import TableEmptyRows from "../table-empty-rows";
import TableNoData from "../table-no-data";
import UserTableRow from "../user-table-row";
import UserTableToolbar from "../user-table-toolbar";

const TableDetails = () => {
  const dispatch = useDispatch();
  const tableList = useSelector((state) => state.tableList);
  const { schemas, selectedSchemaId } = useSelector((state) => state.schemas);
  const { data } = tableList;
  useEffect(() => {
    if (selectedSchemaId) {
      const { catalog_name, name } = schemas.find(
        (schema) => schema._id === selectedSchemaId
      );
      if (catalog_name && name) {
        dispatch(
          fetchTableList({
            catalogName: catalog_name,
            schemaName: name,
          })
        );
      }
    }
  }, [selectedSchemaId]);

  const [filterName, setFilterName] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const handleFilterByName = (event) => {
    // setPage(0);
    setFilterName(event.target.value);
  };

//   const dataFiltered = applyFilter({
//     inputData: users,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });
  const notFound = !!filterName;
  const noResultFound = !data.length ? true : false
  return (
    <Grid xs={12} md={6} lg={8}>
          <Card>
      <CardHeader />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {/* {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))} */}
        </Stack>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button>
      </Box>
    </Card>
        </Grid>
  );
};

export default TableDetails;
