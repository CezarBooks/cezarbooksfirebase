import { Grid, Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";

export const BooksOrder = (): ReactElement | null => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography textAlign={"center"} color="primary" fontSize={30}>
          Aici vom avea formularul pentru carti
        </Typography>
      </Grid>
    </Grid>
  );
};
