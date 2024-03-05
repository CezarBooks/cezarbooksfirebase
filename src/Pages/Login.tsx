// login page

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

export const Login = (): ReactElement | null => {
  const navigate = useNavigate();
  const [height, setHeight] = useState(100);

  // on mobile not landscpe show one section up and on section down
  if (isMobile) {
    height !== 50 ? setHeight(50) : null;
  }

  window.addEventListener("resize", () => {
    // on mobile not landscpe show one section up and on section down
    if (isMobile) {
      height !== 50 ? setHeight(50) : null;
    } else {
      height !== 100 ? setHeight(100) : null;
    }
  });

  let cols = height === 100 ? 6 : 12;

  return (
    <Grid container>
      <Grid item xs={cols} className={`bg-primary text-white ${height}hv`}>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          minHeight={`${height}vh`}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} className="p-3">
              <Typography
                className="text-white"
                textAlign="center"
                fontSize={30}
              >
                {"Comandă fără cont "}
              </Typography>
              <Typography align="center" variant={"h4"}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate("/order");
                  }}
                  className="text-primary bg-white"
                >
                  {"Comandă"}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={cols} className={`bg-white ${height}hv`}>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          minHeight={`${height}vh`}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} className="p-3">
              <Typography align="center" variant={"h4"}>
                Intră în cont
              </Typography>
            </Grid>
            <Grid item xs={height === 100 ? 6 : 10}></Grid>
            <Grid container item xs={12} justifyContent="center">
              <Grid item xs={height === 100 ? 6 : 10}>
                <TextField
                  variant="outlined"
                  label="Utilizator"
                  color="primary"
                />
                <TextField
                  variant="outlined"
                  label="password"
                  color="primary"
                  type="password"
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
