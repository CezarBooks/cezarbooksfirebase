import { ThemeProvider, createTheme } from "@mui/material";
import { roRO } from "@mui/material/locale";
import React, { ReactElement } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { BooksOrder } from "./Pages/Books";
import { Login } from "./Pages/Login";

const Router = createBrowserRouter([
  { path: "/order", element: <BooksOrder /> },
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export const theme = createTheme(
  {
    palette: {
      primary: {
        light: "#5cbd61",
        main: "#34AD3A",
        dark: "#247928s",
        contrastText: "#fff",
      },
      secondary: {
        light: "#4b4f4d",
        main: "#1F2421",
        dark: "#151917",
        contrastText: "#fff",
      },
    },
  },
  roRO
);

export const App = (): ReactElement | null => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} fallbackElement={<BooksOrder />} />
    </ThemeProvider>
  );
};
