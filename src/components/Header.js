import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Box
      py={2}
      px={4}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position:'sticky',
        bgcolor: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <img
          style={{ width: "38px", height: "28px", alignSelf: "center" }}
          src="https://app.vhub.ai/images/logo2.png"
        />
        <Box sx={{display:'flex',flexDirection:'row',gap:1,justifyContent:'center',alignItems:'center'}}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "2.25rem",
              alignSelf: "center",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Top 100 Saree Influencers
          </Typography>
          <Typography
            sx={{
              alignSelf: "center",
              bgcolor: "#f2f4f7",
              px: "10px",
              py: "13px",
              fontSize: "12px",
              borderRadius: "1rem",
            }}
            >
            {props.length}
          </Typography>
        </Box>
      </Box>
      <Box
        pr={2}
        className={classes.btn}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <button>Login</button>
        <button>Signup</button>
      </Box>
    </Box>
  );
};

export default Header;
