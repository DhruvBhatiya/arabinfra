import { Box, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardMui from "../../components/shared/CardMui";
import {
  Container1200
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./courses.style";
import { coursesData } from "./coursesData";

const Courses = () => {
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
        <CardContent sx={{paddingTop: 0}} >
          <Typography component="div" variant="h4" sx={{ marginBottom: '15px', fontWeight: '600' }}>
            Training & Courses
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '17px' }}>We are glad to inform you that we provide Training to Engineers to wanted to or learn Building Permission work we provide the adequate information and now its easy to reach to all,  we are having Excellency for almost seven years experience. </Typography>
          <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '17px' }}>Now it’s easy to learn to you doorstep you need just a good internet connection and computer or laptop and the courses yours</Typography>
          <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '17px' }}>Once you choose course, you get free membership for lifetime</Typography>
        </CardContent>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {coursesData.map((db, index) => (
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

export default Courses;
