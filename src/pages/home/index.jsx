import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ButtonBorder } from "../../components/shared/ButtonCustom";
import CarouselCard from '../../components/shared/CarouselCard';
import {
  Container1200
} from "../../components/shared/CustomContainer";
import TitleSection from "../../components/shared/TitleSection";
import CarouselComponent from "../../components/Slider";
import { useStylesGloble } from "../../global.style";
import { noImage } from '../../Images';
import { fetchSliders } from "../../state-management/admin/slider/getAllSliders/sliderActions";
import { useStyles } from "./home.style";
import {
  settingsMainSlider,
  settingsProductsSlider,
  slidesMain,
  slidesProducts,
  WhyChooseData
} from "./homeData";

const Home = () => {
  const global = useStylesGloble();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgError, setError] = useState(false);

  // Main Slider 
  const MainSlider = useSelector((state) => state.allSlider);
  // const { loading, sliders, error } = sliderState;

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  // console.log("sliders____", sliders)

  // useEffect(() => {
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       scroll: "smooth",
  //     });
  //   };

  //   scrollToTop();
  //   return () => { };
  // }, []);

  const navigate = useNavigate();

  const handleNavigationAbout = () => {
    navigate('/about');
  };


  return (
    <>
      {/* main Slider  */}
      <Box className={classes.main_slider}>
        <CarouselComponent settings={settingsMainSlider} slides={slidesMain}>
          {slidesMain.map((slide, index) => (
            <Box key={index} className={global.slide}>
              <img className={global.bannerImg} src={slide.image} alt="" />
              <div className={'w-96 lg:w-full'}>
                <h1 className='title '>{slide.content}</h1>
              </div>
            </Box>
          ))}
        </CarouselComponent>
      </Box>

      {/* Arab Infradesign */}
      <Container1200 className={classes.growMoreBg + " pt-10 pb-16 "} >
        <Grid className=' lg:px-0 px-2' container spacing={2}>
          <Grid item lg={7} xs={12}>
            <Box className={classes.headingWithLine + ' ' + 'flex gap-5 items-center'}>
              <Box className={classes.home_welcome}>
                <div className="flex gap-5">
                  <div className="servece_0111 mt-[15px] mb-5" ></div>
                  <span>Civil Engineering and Consultancy</span>
                </div><br />
                <h1>We are, Arab Infradesign</h1>
                <p className="tagline">Arab Infradesign is the civil engineering and consultancy, is started in 2020 may 5th till onwards we executed more than 50000+ successful drawing works, consultancies, and queries solving. Our motto and slogan is, ‘’trust on work beyond image and imagination’’ we are not business we are promise. We are with proper skilled professionals and excellent staff.</p><br />
              </Box>
            </Box>
            <Box className="lg:text-left text-center">
              <ButtonBorder onClick={handleNavigationAbout}>Read More...</ButtonBorder>
            </Box>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Box className={classes.imagesSec}>
              <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/about/about.jpg`)} alt={"image"} />
              {/* <img src={noImage} alt={"image"} /> */}
            </Box>
          </Grid>
        </Grid>
      </Container1200>


      {/* Product  */}
      {/* <Container1200 className={global.my40}>
        <TitleSection title={"Our Product"} />
        <Box className={classes.blogStyleParent}>
          <ServiceCard data={productData} />
        </Box>
      </Container1200> */}



      {/* Vision Mission  */}
      {/* <Box className={classes.visionMission + ' ' + "py-[80px]  "} >
        <Container1200 >
          <VerticalTabs tabs={tabsVisionMissoin} content={tabsContentVisionMissoin} />
        </Container1200>
      </Box> */}

      {/* Services */}
      <Box className={classes.productsSliderStyle + ' ' + " "}>
        <Box className={"bg-[#0000006b]  "}>
          <Container1200 className={"  "} >
            <TitleSection title={"Our Services"} className={"productTitle"} />
            <CarouselComponent settings={settingsProductsSlider} >
              {slidesProducts.map((slide, index) => (
                <CarouselCard slide={slide} />
              ))}
            </CarouselComponent>
          </Container1200>
        </Box>
      </Box>
      {/* Why Choose Arab Infradesign ? */}
      <Box className={classes.whyChooseStyle}>
        <Box className="lg:px-0 px-2">
          <Container1200 className={"  "} >
            <TitleSection title={"Why Choose Arab Infradesign ?"} className={"productTitle"} />
            <div className="servece-0111" />
            <Grid container spacing={2}>
              {WhyChooseData && WhyChooseData.map((db, index) => (
                <Grid item lg={3} xs={4}>
                  <Box className={"whyChooseBox"}>
                    <Box className="list-icon">{db.icon}</Box>
                    <h3 className="title">{db.title}</h3>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container1200>
        </Box>
      </Box>




      {/* Testimonials */}
      {/* <Container1140 className={global.mb70}>
        <TitleSection title={"Testimonials"} />
        <CarouselComponent settings={settingsTestiSlider}>
          {testimonialsData.map((slide, index) => (
            <Box className={classes.testimonial}>
              {slide.image ? <Avatar alt={slide.title} src={slide.image} /> :
                <Avatar alt={slide.title} src={'/'} />}
              <Box key={index} className={classes.testiSliderStyle}>
                <FormatQuoteIcon />
                <p className="description">{slide.description}</p>
                <h4 className="title">{slide.title}</h4>
              </Box>
            </Box>
          ))}
        </CarouselComponent>
      </Container1140> */}

      {/* Partner Brands */}
      {/* <Container10 className={global.pt20 + ' ' + global.mb70}>
        <Box className={classes.brandStyle}>
          <TitleSection title={"Partner Brands"} />
          <CarouselComponent settings={settingsPartnerBrandsSlider}>
            {partnerBrandsData.map((slide, index) => (
              <Box key={index} className={classes.mainSlide}>
                <img className={classes.bannerImg} src={slide.image} alt="" />
              </Box>
            ))}
          </CarouselComponent>
          <Box className={classes.brandBtn}>
            <ButtonBorder>Knore More</ButtonBorder>
          </Box>
        </Box>
      </Container10> */}

      {/* Our Blog */}
      {/* <Container1320 className={global.my70}>
        <TitleSection title={"Our Blog"} subTitle={"Knowledge is Power"} />
        <Box className={classes.blogStyleParent}>
          <BlogCard data={blogData} />
        </Box>
      </Container1320> */}
    </>
  );
};

export default Home;
