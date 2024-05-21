import { useDispatch, useSelector } from "react-redux";
import { fetchTableList } from "../../rtk/tableList";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
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

const TableList = () => {
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

  const notFound = !!filterName;
  const noResultFound = !data.length ? true : false
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
          {/* <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        /> */}

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
                  {data.map((row, index) => (
                    <UserTableRow
                      key={index}
                      name={row.name}
                      owner={row.owner}
                      generation={row.generation}
                      //   selected={selected.indexOf(row.name) !== -1}
                      //   handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}
                  {/* {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      name={row.name}
                      role={row.role}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      isVerified={row.isVerified}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))} */}

                  {/* <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                /> */}

                  {/* {notFound && <TableNoData query={filterName} />} */}
                  {noResultFound && (<TableNoData query="" />)}
                  {/* <TableNoData /> */}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          {/* <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        </Box>
      </Card>
    </Container>
  );
};

export default TableList;
