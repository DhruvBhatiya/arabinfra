import React, { useEffect } from 'react'
import { useStyles } from './serviceDetails.style';
import { Container1200 } from '../../../components/shared/CustomContainer';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { noImage } from '../../../Images';
import Colors from '../../../Colors';
import { useParams } from 'react-router-dom';
import { slidesProducts } from '../../home/homeData';

const ServiceDetails = ({setServiceTitle}) => {
  const classes = useStyles();
  const { id } = useParams();

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

 

  const service = slidesProducts.find((item) => item.link.endsWith(`/${id}`)); // Find the matching item

  useEffect(()=>{
    setServiceTitle(service.title)
  }, [service])


  if (!service) {
    return <p>Service not found.</p>; // Handle invalid ID
  }

 


  return (
    <>
      <Box className={classes.productsSliderStyle}>
        <Container1200 className={" pt-12 pb-9 "} >
          <Card sx={{ display: 'flex', marginBottom: '30px', boxShadow: 'none' }}>
            <Grid container spacing={5}>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <Typography component="div" variant="h4" sx={{marginBottom: '15px', fontWeight: '600', color: `${Colors.blue}` }}>
                    {service.title}
                  </Typography>

                  {service.content.map((e) => (
                    <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '15px', fontSize: '17px', lineHeight: '28px' }}> {e} </Typography>
                  ))}

                </CardContent>
              </Grid>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <CardMedia
                    component="img"
                    sx={{ padding: '0 10px' }}
                    image={service.image}
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
  );
};

export default ServiceDetails
