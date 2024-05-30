import { useDispatch, useSelector } from "react-redux";
import { fetchTableList } from "../../rtk/tableList";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import UserTableHead from "../user-table-head";
import TableEmptyRows from "../table-empty-rows";
import TableNoData from "../table-no-data";
import UserTableRow from "../user-table-row";
import UserTableToolbar from "../user-table-toolbar";

const TableList = () => {
  const dispatch = useDispatch();
  const tableList = useSelector((state) => state.tableList);
  const { schemas, selectedSchemaId } = useSelector((state) => state.schemas);
  const { data, loading } = tableList;
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

  
  const notFound = !!filterName;
  const noResultFound = !data.length ? true : false;
  return (
    <Container>
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Tables</Typography>

      </Stack> */}

      <Card>
        <CardHeader title="Table List" />

        <Box
        // sx={{
        //   p: 3,
        //   gap: 2,
        //   display: "grid",
        //   gridTemplateColumns: "repeat(2, 1fr)",
        // }}
        >
          <Scrollbar>
            <TableContainer sx={{ overflow: "unset" }}>
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead
                  order={order}
                  orderBy={orderBy}
                  rowCount={data.length}
                  // numSelected={selected.length}
                  // onRequestSort={handleSort}
                  // onSelectAllClick={handleSelectAllClick}
                  headLabel={[
                    { id: "name", label: "Name" },
                    { id: "owner", label: "Owner" },
                    { id: "generation", label: "Generation" },
                    { id: "" },
                  ]}
                />
                <TableBody>
                  {loading && (
                    <>
                      <TableRow>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="rounded" width={150} height={10} />
                        </TableCell>
                      </TableRow>
                    </>
                  )}
                  {!loading && data.length ? (
                    <>
                      {data.map((row, index) => (
                        <UserTableRow
                          key={index}
                          name={row.name}
                          owner={row.owner}
                          generation={row.generation}
                          tableId={row._id}
                        />
                      ))}
                    </>
                  ) : null}

                  {!loading && noResultFound && <TableNoData query="" />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Box>
      </Card>
    </Container>
  );
};

export default TableList;
