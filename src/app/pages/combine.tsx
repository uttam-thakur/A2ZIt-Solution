import React from "react";
import WriteUs from "./writeUs";
import ContactUs from "./contactUs";
import { Grid } from "@mui/material";

const Combine = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <WriteUs />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ padding: "0px 10px 0px 0px" }}>
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Combine;
