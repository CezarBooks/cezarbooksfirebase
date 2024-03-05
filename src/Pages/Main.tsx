import { Button, Grid } from "@mui/material";
import React from "react";
import { ReactElement } from "react";

export const Main = (): ReactElement | null => {
  return (
    <Grid container>
      <Button
        action={() => {
          console.log(" OK then ");
        }}
      />
    </Grid>
  );
};
