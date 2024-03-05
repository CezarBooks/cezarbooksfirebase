import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactElement } from "react";
import { theme } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
export interface T_inputFields {
  label: string;
  value: any;
  type?: "number" | "select";
  options?: {
    xs: number;
    md: number;
    xl: number;
  };
  variants?: { value: string; lable: string }[];
}

export const BooksOrder = (): ReactElement | null => {
  const navigate = useNavigate();
  const [form, setForm] = useState<any>({
    deliveryType: "now",
  });

  const contactFields: T_inputFields[] = [
    {
      value: "name",
      label: "Nume",
    },
    {
      value: "phone",
      label: "Telefon",
    },
    {
      value: "email",
      label: "Adresă email",
    },
    {
      value: "locality",
      label: "Localitate",
    },
    {
      value: "county",
      label: "Județ",
    },
  ];

  const orderFields: T_inputFields[] = [
    {
      value: "bookName",
      label: "Nume carte",
      options: { xs: 9, md: 9, xl: 9 },
    },
    {
      value: "quantity",
      label: "Cantitate",
      type: "number",
    },
    {
      value: "deliveryType",
      label: "Mod livrare",
      type: "select",
      variants: [
        {
          value: "now",
          lable: "Imediată - 3 Zile",
        },
        {
          value: "regular",
          lable: "Normală - 5 - 7 zile",
        },
        {
          value: "personal",
          lable: "Ridicare din sediu",
        },
      ],
    },
  ];

  return (
    <Grid container justifyContent={"center"} justifyItems={"center"}>
      <Grid item xs={12}>
        <Typography textAlign={"center"} color="primary" fontSize={30}>
          Logo word cafe
        </Typography>
      </Grid>

      <Grid
        xs={12}
        item
        container
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid
          item
          xs={10}
          md={2}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          <Divider
            variant="middle"
            style={{
              height: "2px",
              color: "brow",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        style={{
          marginTop: 10,
        }}
        item
        container
        xs={10}
        md={4}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid item xs={12}>
          <Typography align="center" color={theme.palette.primary.main}>
            {"Date de contact"}
          </Typography>
        </Grid>
        {contactFields.map((field) => {
          return (
            <Grid
              item
              key={field.value}
              xs={field.options?.xs}
              md={field.options?.md}
              xl={field.options?.xl}
              style={{
                padding: 4,
              }}
            >
              <TextField
                fullWidth
                id={field.value}
                label={field.label}
                value={
                  form && form[field.value] ? form[field.value] : undefined
                }
                color={"primary"}
                variant="outlined"
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        xs={12}
        style={{
          marginTop: 10,
        }}
        item
        container
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid
          item
          xs={10}
          md={2}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          <Divider
            variant="middle"
            style={{
              height: "2px",
              color: "brow",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        style={{
          marginTop: 10,
        }}
        item
        container
        xs={10}
        md={4}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid item xs={12}>
          <Typography align="center" color={theme.palette.primary.main}>
            {"Detalii comandă"}
          </Typography>
        </Grid>
        {orderFields.map((field) => {
          return (
            <Grid
              key={field.value}
              item
              xs={field.options?.xs}
              md={field.options?.md}
              xl={field.options?.xl}
              style={{
                padding: 4,
              }}
            >
              {field.type === "select" ? (
                <FormControl>
                  <InputLabel id={field.value}>{field.label}</InputLabel>
                  <Select
                    labelId={field.value}
                    fullWidth
                    label={field.label}
                    id={field.value}
                    value={
                      form && form[field.value] ? form[field.value] : undefined
                    }
                  >
                    {field.variants?.map((variant) => {
                      return (
                        <MenuItem key={variant.value} value={variant.value}>
                          {variant.lable}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  id={field.value}
                  fullWidth
                  key={field.value}
                  label={field.label}
                  type={field.type ? field.type : "text"}
                  value={
                    form && form[field.value] ? form[field.value] : undefined
                  }
                  color={"primary"}
                  variant="outlined"
                />
              )}
            </Grid>
          );
        })}
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid
          item
          style={{
            marginTop: 10,
          }}
        >
          <Button
            variant="outlined"
            style={{
              margin: 2,
            }}
            onClick={() => console.log(" Am data click ")}
            name="Maxim"
          >
            {"Comandă"}
          </Button>
          <Button
            variant="outlined"
            style={{
              margin: 2,
            }}
            onClick={() => {
              navigate("/login");
            }}
            name="Maxim"
          >
            {"Intră în cont "}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
