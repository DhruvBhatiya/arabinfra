import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardHoverZoom from "../../components/shared/CardHoverZoom";
import {
  Container1200
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./service.style";

import CardMui from "../../components/shared/CardMui";
import { slidesServices } from "./serviceData";

const Services = () => {
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
          <CardHoverZoom data={slidesServices} />
        </Box> */}

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {slidesServices.map((db, index) => (
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <CardMui data={db} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container1200>
    </>
  );
};

export default Services;
