import React from "react";
import { Grid, Skeleton } from "@mui/material";

export default function SkeletonType({ type, loading = true }) {
  if (type === "image") {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {loading &&
          Array.from(new Array(7)).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton
                variant="rect"
                width={300}
                height={390}
                style={{ borderRadius: 10 }}
              />
            </Grid>
          ))}
      </Grid>
    );
  }
}
