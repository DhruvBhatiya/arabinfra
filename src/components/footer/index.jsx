import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box } from '@mui/material';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { menuListDesktop, menuListMobile } from '../header/headerData';
import { Container10, Container100, Container1140, Container1200, Container1320, Container1400, Container1440 } from '../shared/CustomContainer';
import { useStyles } from './footer.style';
import { ProductsLinks } from './footerData';
import { slidesProducts } from '../../pages/home/homeData';
import Whatsapp from '../shared/WhatsApp';


const Footer = () => {
    const classes = useStyles();
    const location = useLocation();
    const path = location.pathname;
    const isAdmin = path.includes("admin");
    const currentYear = new Date().getFullYear();
    const TitleHead = ({ title }) => {
        return (
            <h1 className={classes.titleHead}>{title}</h1>
        )
    }

    if (isAdmin !== true) {
        return (
            <Box className={classes.footerStyle}>
                <Container1200>
                    {/* 1 */}
                    <Box className={classes.row}>

                        <Box className={'footer-form'}>
                            <TitleHead title="About Arab Infradesign" />
                            <p>Arab Infradesign is the civil engineering and consultancy, is started in 2020 may 5th till onwards we executed more than 50000+ successful drawing works, consultancies, and queries solving. Our motto and slogan is, ‘’trust on work beyond image and imagination’’ we are not business we are promise. We are with proper skilled professionals and excellent staff.</p>
                        </Box>

                        <Box>
                            <TitleHead title="Quick Links" />
                            <Box className={classes.quicklinks}>
                                {menuListDesktop.map((db, index) => {
                                    return (
                                        db.link !== '/' && (
                                            <NavLink key={index} className={'link hover:text-white'} to={db.link}>{db.title}</NavLink>
                                        )
                                    )
                                }
                                )}
                            </Box>
                        </Box>

                        <Box>
                            <TitleHead title="Our Services" />
                            <Box className={classes.quicklinks}>
                                {slidesProducts && slidesProducts.map((db, index) => {
                                    return (
                                        db.link !== '/offer-of-month' &&
                                        <NavLink className={'link hover:text-white'} key={index} to={db.link}>{db.title}</NavLink>
                                    )
                                }
                                )}
                            </Box>
                        </Box>

                        {/* 
                        <Box>
                            <TitleHead title="Useful Link" />
                            <Box className={classes.socialLinks}>
                                {socialLinks.map((db, index) => (
                                    <Box>{db.icon}</Box>
                                ))}
                            </Box>
                        </Box> */}
                    </Box>
                    {/* 2 */}
                    <Box className={classes.rowBottom + ' ' + 'border-t-2 border-solid pt-4 mt-4'}>
                        <Box className={''}>
                            <p>© {currentYear} <Link className='text-white' to={'https://arabinfradesign.in/'}>arabinfradesign.in</Link> Design By <span>Dhruv Computers</span> </p>
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                </Container1200>

                <ScrollToTop
                    smooth
                    component={
                        <KeyboardDoubleArrowUpIcon style={{ fontSize: 25, color: 'black' }} />
                    }
                />

                <Whatsapp />
            </Box>
        )
    }
}

export default Footer
