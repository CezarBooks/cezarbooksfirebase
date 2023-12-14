import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { roRO } from "@mui/material/locale";
import React, { ReactElement } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BooksOrder } from "./Pages/Books";

const Router = createBrowserRouter([{ path: "/", element: <BooksOrder /> }]);

export const App = (): ReactElement | null => {
  const theme = createTheme(
    {
      palette: {
        primary: {
          light: "#23b6d4",
          main: "#1fa6c1",
          dark: "#1991a7",
          contrastText: "#fff",
        },
        secondary: {
          light: "#f9f2dc",
          main: "#f0dea6",
          dark: "#e5c86d",
          contrastText: "#000",
        },
      },
    },
    roRO
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};
