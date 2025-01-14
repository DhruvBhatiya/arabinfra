import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';

import { useStyles } from './about.style';

const joinCotent = ['Highlights sub work services.', 'Lifetime Membership', 'Training Courses.', 'Construction related services.', 'A well developed youtuber', 'Best informative ideology.', 'Digital / Virtual Services.', 'Third party work / consultancy.']

const About = () => {
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
      <Box className={classes.productsSliderStyle}>
        <Container1200 className={"  "} >
          <Card sx={{ display: 'flex', marginBottom: '0px', boxShadow: 'none' }}>
            <Grid container spacing={5}>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <Typography component="div" variant="h4" sx={{ marginBottom: '15px', fontWeight: '600' }}>
                    Welcome to Arab Infradesign!
                  </Typography>

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>
                    Arab Infradesign is the civil engineering and consultancy, is started in 2020 may 5th till onwards we executed more than 50000+ successful drawing works, consultancies, and queries solving. Our motto and slogan is, ‘’trust on work beyond image and imagination’’ we are not business we are promise. We are with proper skilled professionals and excellent staff.
                  </Typography>

                  <Typography component="div" variant="h6" sx={{ marginBottom: '15px', fontWeight: '600' }}>
                    Why Join Arab Infradesign
                  </Typography>
                  <ul className="list-disc list-inside pl-4 space-y-2 mb-4 text-base">
                    {joinCotent.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>Thank you for choosing Arab Infradesign. We look forward to partnering with you and contributing to your achievements.</Typography>
                </CardContent>
              </Grid>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <CardMedia
                    component="img"
                    sx={{ padding: '0 10px' }}
                    image={require(`${process.env.REACT_APP_IMAGES_PATH}/about/about.jpg`)}
                    alt="Card Image"
                  />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container1200>

        {/* Vision Mission  */}
        {/* <Box className={classes.visionMission + ' ' + "py-[80px]  "} >
          <Container1200 >
            <VerticalTabs tabs={tabsVisionMissoin} content={tabsContentVisionMissoin} />
          </Container1200>
        </Box> */}
      </Box>




    </>
  )
}

export default About
