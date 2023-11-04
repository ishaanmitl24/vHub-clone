import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Table from "./Table";
import { fetchData } from "../store/https";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";

const Main = () => {
  const { data, isPending } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  const [input, setInput] = useState("");
  const [page, setPage] = useState(0);
  const [newlen,setLength] = useState(0);
  const getRowData = (pagedata) => {
    setPage(pagedata);
  };


  const getInput = (inputnew) => {
    setInput(inputnew);
  };

  const getLength = (len)=>{
    setLength(len);
  }
  
  return (
    <div>
      <Header length={isPending ? null : data.instagram.length } />
      <SearchBar  len={newlen} data={isPending ? null : data.instagram} getInput={getInput} getRowData={getRowData} />
      {isPending && (
        <Box sx={{ pt: 4, display: "flex",justifyContent: "center"}}>
          <CircularProgress size={100} sx={{ color: "#09c5f9" }} />
        </Box>
      )}
      {!isPending && (
        <Box sx={{ px: 5, pt: 1, pb: 6,borderRadius:4,overflowX:{md:'scroll',xs:'scroll'} }}>
          <Table getLength={getLength} input={input} page={page} data={data.instagram} />
        </Box>
      )}
    </div>
  );
};

export default Main;
