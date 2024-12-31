import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import { useStyles } from './contact.style';
import ContactForm from './ContactForm';

const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: 'smooth',
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Box className={classes.productsSliderStyle + ' ' + 'pb-7'}>

        {/* <TitleSection title={"Feel free to contact us"} className={"productTitle"} /> */}
        <Container1200 className={'pt-12 pb-6 lg:px-0 px-2'}>
          <h1 className='text-4xl font-semibold mb-6'>Feel free to contact us</h1>
          <Grid container spacing={5}>
            <Grid item lg={5} xs={12}>

              {/* Left Column: Address Section */}
              <div className=" w-full mb-8 lg:mb-0">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Registered office</h2>
                  <p className="mb-4">
                    S-22/23 PALIKA BAZAR, <br />opp. A DIVISION POLICE STATION, <br />Mehsana, Gujarat 384001
                  </p>

                  {/* <h2 className="text-2xl font-semibold mb-4">Branch office</h2>
                  <p className="mb-4">
                    Palace road, Rajkot,
                    <br />
                    Gujarat 360001
                  </p> */}

                  <p className="mb-4">
                    <strong>Phone:</strong>
                    <a href="tel:+919726724670">+91 9726724670</a>
                  </p>
                  <p className="mb-4">
                    <strong>Email:</strong> <a href="mailto:vipul.msh@gmail.com">vipul.msh@gmail.com</a> / <a href="mailto:arab.infradesign@gmail.com">arab.infradesign@gmail.com</a>
                  </p>
                  <p className="mb-4">
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Saturday: 10:00 AM to 8:00 PM
                  </p>
                </div>
              </div>



            </Grid>
            <Grid item lg={7} xs={12}>
              {/* Right Column: Contact Form */}
              <div className="w-full">
                <ContactForm />
              </div>
            </Grid>
          </Grid>
        </Container1200>
      </Box>
    </>
  );
};

export default Contact;
