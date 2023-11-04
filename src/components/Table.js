import React, { useEffect, useState } from "react";
import {
  Table as TableMain,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  Avatar,
} from "@mui/material";

const Table = (props) => {
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    if (props.input.length !== 0) {
      const newData = props.data.filter(
        (ele) =>
          ele["full_name"].toLowerCase().includes(props.input.toLowerCase()) ===
          true
      );
      setFilterData(newData);
      props.getLength(newData.length);
    } else {
      setFilterData(props.data);
      props.getLength(props.data.length);
    }
  }, [props.input]);
  useEffect(() => {
    setFilterData(props.data);
  }, []);
  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: "white",
        overflowX: { md: "scroll", xs: "scroll" },
        boxShadow:
          "1px 1px 5px  rgba(0,0,0,0.1) , -1px -1px 5px  rgba(0,0,0,0.1)",
      }}
    >
      <TableMain>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ "&.MuiTableCell-head": { border: "none", width: 320 } }}
            >
              <Typography
                sx={{ fontWeight: 600, color: "#475467", fontSize: "14px" }}
              >
                Name
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                Growth Rate
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                Engagment Rate
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                Average Views
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                VQS
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                Followers
              </Typography>
            </TableCell>
            <TableCell sx={{ "&.MuiTableCell-head": { border: "none" } }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#475467", fontSize: "14px" }}
              >
                Category
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData &&
            filterData
              .slice(props.page * 20, props.page * 20 + 20)
              .map((element, index) => {
                let gr = +(element["growth_rate"] * 100).toFixed(2);
                let er = +(element["engagement_rate"] * 100).toFixed(2);
                let views =
                  element["avg_views"] < 1000
                    ? element["avg_views"]
                    : +(element["avg_views"] / 1000).toFixed(1) === 0
                    ? " "
                    : `${+(element["avg_views"] / 1000).toFixed(1)}k`;
                let followers = +(element["followers"] / 1000).toFixed(1);
                return (
                  <TableRow
                    sx={{ bgcolor: `${index % 2 === 0 ? "#fafef8" : ""}` }}
                    key={element["username"]}
                  >
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Box
                        sx={{ display: "flex", gap: 2, flexDirection: "row" }}
                      >
                        <Avatar
                          src={
                            element["profile_pic"]
                              ? element["profile_pic"]
                              : "https://app.vhub.ai/images/logo2.png"
                          }
                          sx={{ alignSelf: "center", width: 42, height: 42 }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "#344054",
                              fontWeight: 500,
                            }}
                          >
                            {element["full_name"]}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              fontWeight: 600,
                              fontFamily: "Inter , sans-serif",
                              pl: 1,
                              pr: 2,
                              py: "4px",
                              borderRadius: 5,
                              backgroundColor: "#f2f4f7",
                              color: "#344054",
                            }}
                          >
                            @ {element.username}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                          color: `${gr > 0 ? "#008000" : "#ff0000"}`,
                        }}
                      >
                        {gr === 0 ? " " : `${gr.toFixed(2)}%`}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                        }}
                      >
                        {er === 0 ? " " : `${er.toFixed(2)}%`}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                        }}
                      >
                        {views}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                        }}
                      >
                        {element.vqs}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                        }}
                      >
                        {`${followers === 0 ? "" : `${followers}k`}`}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ "&.MuiTableCell-body": { border: "none" } }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Inter , sans-serif",
                        }}
                      >
                        {element["category"]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </TableMain>
    </Box>
  );
};

export default Table;
