import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardMuiDownload from "../../components/shared/CardMui/CardMuiDownload";
import {
  Container1200
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./download.style";
import { downloadData } from "./downloadData";

const Download = () => {
  const global = useStylesGloble();
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Container1200 className={'py-20'}>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {downloadData.map((db, index) => (
              <Grid item lg={2} md={4} sm={12} xs={12}>
                <CardMuiDownload data={db} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container1200>
    </>
  );
};

export default Download;
