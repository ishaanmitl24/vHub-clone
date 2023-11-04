import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, TablePagination } from "@mui/material";
import { Search } from "@mui/icons-material";
import classes from "./SearchBar.module.css";
import { grey } from "@mui/material/colors";
const SearchBar = (props) => {
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(()=>{
    props.getRowData(page);
  },[page])
  return (
    <Box
      sx={{
        background: "transparent",
        px: 8,
        py:2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Paper
        className={classes.input}
        sx={{
          display: "flex",
          flexDirection: "row",
          pl: 1,
          pr: 4,
          py: 1,
          borderRadius: "1.5rem",
        }}
        elevation={1}
      >
        <IconButton
          size="small"
          sx={{
            background: "transparent",
            "&.MuiIconButton-root:hover": {
              color: grey[400],
              background: "transparent",
            },
          }}
        >
          <Search
            sx={{
              background: "tranparent",
              alignSelf: "center",
              color: "inherit",
            }}
          />
        </IconButton>
        <input onChange={(event)=>props.getInput(event.target.value)} type="text" placeholder="Search for influencers" />
      </Paper>
      <TablePagination
        count={108}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={20}
        rowsPerPageOptions={[20]}
        component="div"
        sx={{ border: "none" }}
        elevation={0}
      />
    </Box>
  );
};

export default SearchBar;
