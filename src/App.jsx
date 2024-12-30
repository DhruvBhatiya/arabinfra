import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoginAdmin from "./components/auth/LoginAdmin";
import Footer from "./components/footer";
import Header from "./components/header";
import withBanner from './hoc/withBanner';
import About from "./pages/about";
import AdminDashboards from "./pages/admin/dashboard";
import ContactUs from './pages/contact';
import Home from "./pages/home";
import Gallery from './pages/gallery';
// import Products from './pages/products';
import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";

// Images 
import ScrollToTop from './components/shared/ScrollToTop';
import { commanBanner } from './Images';

import Services from './pages/service';
// import Projects from './pages/projects';
import ServiceDetails from './pages/service/service-details';
import ChatGPt from './pages/gpt';
import Download from './pages/download';
import Courses from './pages/courses';
import CoursesDetails from './pages/courses/courses-details';



function App() {
  const isAuthenticated = useSelector((state) => state.adminLogin.isAuthenticated);
  const [serviceTitle, setServiceTitle] = useState('')
  const [coursesTitle, setCoursesTitle] = useState('')

  const About__ = withBanner(About, `${commanBanner}`, 'About Us');
  const Services__ = withBanner(Services, `${commanBanner}`, 'Services');
  const ServiceDetails__ = withBanner(ServiceDetails, `${commanBanner}`, `${serviceTitle}`);
  // const Projects__ = withBanner(Projects, `${commanBanner}`, 'Projects');
  const Courses__ = withBanner(Courses, `${commanBanner}`, 'Courses');
  const CoursesDetails__ = withBanner(CoursesDetails, `${commanBanner}`, `${coursesTitle}`);
  const Gallery__ = withBanner(Gallery, `${commanBanner}`, 'Gallery');
  const Download__ = withBanner(Download, `${commanBanner}`, 'Download');
  const ContactUs__ = withBanner(ContactUs, `${commanBanner}`, 'Contact Us');

const domainLink = "/apps/arabinfra/"
  
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<LoginAdmin />} />
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route>
        <Route path={`/`} element={<Home />} />
        <Route path="/about" element={<About__ />} />
        {/* <Route path="/gpt" element={<ChatGPt />} /> */}
        <Route path="/services" element={<Services__ />} />
        <Route path="/services/details/:id" element={<ServiceDetails__ setServiceTitle={setServiceTitle} />} />
        <Route path="/courses" element={<Courses__ />} />
        <Route path="/courses/details/:id" element={<CoursesDetails__ setCoursesTitle={setCoursesTitle} />} />

        {/* <Route path="/services" element={<Services__ />}>
          <Route index={true} element={<Services />} />
          <Route path="details" element={<ServiceDetails__ />} />
        </Route> */}

        <Route path="/gallery" element={<Gallery__ />} />
        <Route path="/download" element={<Download__ />} />
        <Route path="/contact" element={<ContactUs__ />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

