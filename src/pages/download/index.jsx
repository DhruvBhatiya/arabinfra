import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardHoverZoom from "../../components/shared/CardHoverZoom";
import {
  Container1200
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./download.style";
import { slidesProducts } from "../home/homeData";
import CardMui from "../../components/shared/CardMui";
import { downloadData } from "./downloadData";
import CardMuiDownload from "../../components/shared/CardMui/CardMuiDownload";

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
        {/* <Box className={classes.blogStyleParent + ' ' + 'grid grid-cols-3 gap-8'}>
          <CardHoverZoom data={slidesProducts} />
        </Box> */}

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
