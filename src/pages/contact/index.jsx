import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import { useStyles } from './contact.style';
import ContactForm from './ContactForm';
import EmailForm from './EmailForm';

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
      <Box className={classes.productsSliderStyle + ' ' + ''}>

        {/* <TitleSection title={"Feel free to contact us"} className={"productTitle"} /> */}
        <Container1200 className={''}>
          <h1 className='text-4xl font-semibold mb-6'>Feel free to contact us</h1>
          <Grid container spacing={5}>
            <Grid item lg={4} xs={12}>

              {/* Left Column: Address Section */}
              <div className=" w-full mb-8 lg:mb-0 h-full">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
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

            <Grid item lg={8} xs={12}>
              {/* Right Column: Contact Form */}
              <div className="w-full ">
                <ContactForm />
                {/* <EmailForm /> */}
              </div>

            </Grid>
          </Grid>
        </Container1200>

        <Container1200 className={''} style={{ paddingTop: 0 }}>
          <Grid container spacing={5}>
            <Grid item lg={12} xs={12}>
              {/* Right Column: Contact Form */}
              <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.6220720912993!2d72.39107909168229!3d23.603182322372188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c43b2bff8ece7%3A0xf1f517c75df1c151!2sArab%20Infradesign!5e1!3m2!1sen!2sin!4v1735706532918!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Grid>
          </Grid>
        </Container1200>
      </Box>
    </>
  );
};

export default Contact;
