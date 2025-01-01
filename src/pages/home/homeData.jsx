
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';
import HeadphonesIcon from '@mui/icons-material/Headphones';


import aboutImg from '../../assets/img/images/about/about.webp';

// Product 
import architectureInterior from '../../assets/services/architecture-and-Interior.jpeg';
import buildingDesign from '../../assets/services/building-design.jpeg';
import buildingModernization from '../../assets/services/building-modernization.jpeg';
import buildingPermission from '../../assets/services/building-permission.jpeg';
import layoutLandDevelopment from '../../assets/services/layout-and-land-development.jpeg';
import onlineDevelopment from '../../assets/services/online-development.jpeg';
import planningSupervision from '../../assets/services/planning-and-supervision.jpeg';
import planning from '../../assets/services/planning.jpeg';
import businessTraining from '../../assets/services/business-training.jpeg';
import img3D from '../../assets/services/3d.jpeg';


// Service 

import { nobanner, noImage, slider1, slider2, slider3, slider5, } from '../../Images';

// Main Slider 
export const slidesMain = [
  { image: slider1, content: '"Trust on work beyond image and imagination"' },
  { image: slider2, content: '"Trust on work beyond image and imagination"' },
  { image: slider3, content: '"Trust on work beyond image and imagination"' },
];
// Main Slider Setting 
// export const settingsMainSlider = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
// };
// Main Slider Setting 
export const settingsMainSlider = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />,

};



// Our Services 
// export const productData = [
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   // {
//   //   image: bioStimulants,
//   //   title: 'Soil Application for Bio Fertilizers',
//   // },
// ];


// Products 
// =================================
export const settingsProductsSlider = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  spaceBetween: 16,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const slidesProducts = [
  // Fertilizer 
  { image: buildingPermission, title: 'Building permission / approval', link: '/services/details/101',
    content: ['We are providing these service from the first day to onwards. Building permission is a necessary process for the building. After that you can start your construction. It is fully legal process for building. We should get you building permission via online and offline.']
   },
  { image: planning, title: 'Planning', link: '/services/details/102',
    content: ['For the above type buildings and the other building, every building must need a planning before it built and then it would be implemented. We are very excellent in our field. We provide you a very vast and rumors planning for your building. Its up to you what you want. You decide, we work'] },
  { image: buildingDesign, title: 'Building Design', link: '/services/details/103',
    content: ['With a latest software and proper working personal, we are made very classic, modern, combined design for the building. You can modify and also indemnify your design. Because building is not a building. It is a dream so we work with it and it worth with us.'] },
  { image: layoutLandDevelopment, title: 'Layout and Land development', link: '/services/details/104',
    content: ['we made more and more layout designs. In mehsana 30+  designs are done. In banaskantha 100+ and in patan 20+  layouts are completed by us. Even we provide layout with building where you can make not only plotting but also get the building permission and planning.  We are also work for NA (Non Agriculture) with our team we promise not let you go for searching. In one visit you get many much.'] },
  { image: buildingModernization, title: 'Building modernization', link: '/services/details/105',
    content: ["In our approach to building modernization, we don't just renovate spaces; we breathe new life into them. With careful planning and expert supervision, we reimagine outdated structures as vibrant hubs of contemporary living. Our collaborative process ensures that every project reflects the unique vision and needs of our clients, resulting in revitalized spaces that inspire and delight. From sleek design updates to sustainable technology integration, we transform buildings into dynamic showcases of modern sophistication, creating spaces that not only stand the test of time but also capture the imagination of those who inhabit them."] },
  { image: planningSupervision, title: 'Planning and Supervision', link: '/services/details/106',
    content: ['In our planning and supervision work, we meticulously oversee every aspect of the architectural process. We collaborate closely with clients and contractors to ensure smooth progress. By staying organized and communicating effectively, we ensure that each project exceeds expectations and delivers outstanding results. '] },
  { image: architectureInterior, title: 'Architecture and Interior', link: '/services/details/107',
    content: ['In architectural work, strive to blend functionality with aesthetic elegance, creating spaces that inspire and uplift the human experience. Drawing upon a deep understanding of architectural principles, engage in a collaborative process that values both creativity and practicality. Each design is meticulously crafted, paying close attention to the interplay of light, form, and materiality to evoke a sense of harmony and tranquility within the built environment. Whether designing a residential retreat, a commercial complex, or a public space, my goal is to imbue every project with a timeless quality that resonates with its users and enhances the surrounding community. Through thoughtful consideration of context, sustainability, and human behavior, seek to create architecture that not only fulfills its intended purpose but also enriches the lives of those who inhabit it. ', 'We are with a good learned and experienced architecture team. We provide you a good architectural aspects and views for your building. And with the interior we made your building fruitful and luxurious. Or we made as you want. You think, We made'] },
  { image: onlineDevelopment, title: 'Online Development  you can avail at your doorstep or wherever you are. ', link: '/services/details/108',
    content: ['By online development, we made easy the building work. You don’t worry to go table to table. We made this easy. We work for you. you just have to contact us through our website, or email. we provide you all related help or service. not only we provide services...but also our services are tremendously welcomed by our customers '] },
  { image: businessTraining, title: 'Business Training', link: '/services/details/109',
    content: ['We provide solution and training to new startup.'] },
  { image: img3D, title: '3D, Elevation and Walkthrough', link: '/services/details/110',
    content: ['We provide 3D, Elevation and Walkthrough.'] },

];




// export const ourNumberData = [
//   { title: 'Locations Pan India', count: 180, icon: <NearMeIcon /> },
//   { title: 'Artists & Technicians', count: 400, icon: <NearMeIcon /> },
//   { title: 'Decades of Experience', count: 3, icon: <HourglassTopIcon /> },
//   { title: 'Global Awards Won', count: 15, icon: <NearMeIcon /> },
// ];

export const aboutUsData = [
  // {
  //     imgPosition: 'left',
  //     title: 'JOURNEY SO FAR', 
  //     image: salon,
  //     description: ['Beauty Bee Salon Pvt. Ltd. was founded 3 Decades ago with the aim of providing world-class salon experience to clients. The brand is managed by Mr. Sumit Israni, Celebrity Hair Stylist and Managing Director, Beauty Bee Salon Pvt. Ltd.']
  // },
  {
    imgPosition: 'right',
    title: 'Organic Bio Fertilizer',
    image: aboutImg,
    description: ['Largely most of the farmers know that soil health is critical to their business.', '"We are not treating the plant, we are treating the soil. We feel if you treat the soil right and if you take care of the soil, your crops will definitely rise"']
  },
];

// Testimonial Slider Setting 
// export const settingsTestiSlider = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: false,
//   autoplay: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };
// Testimonial Data
// export const testimonialsData = [
//   {
//     image: team4,
//     title: 'Madhulika Sharma',
//     description: ["As someone who's always struggled with hair color, I was nervous about trying something new. But this salon's team of experts put me at ease. My hair has never looked so beautiful and vibrant!"]
//   },
//   {
//     image: team3,
//     title: "Anisha Sharma",
//     description: ["I'm a total skeptic when it comes to haircuts, but this salon blew me away. I went in for a simple trim and left with a stylish, modern haircut that completely transformed my look."]
//   },
//   {
//     image: team2,
//     title: "Ankur Aggarwal",
//     description: ["I've been getting my haircuts at this salon for years, and I can't imagine going anywhere else. The stylists here always give me the perfect cut that suits my face shape and style."]
//   },
//   {
//     title: "Jessica Arora",
//     description: ["The haircuts here are consistently top-notch, and their attention to detail is unmatched. Plus, the face care treatments are a fantastic way to relax and rejuvenate. I feel like a new person every time I leave."]
//   },
//   {
//     image: team1,
//     title: "Gourav Arora",
//     description: ["I can't express how grateful I am to have found this salon. The hairstylists here are not only incredibly talented but also friendly and welcoming."]
//   },

// ];

// Partner Brands Slider Setting 
// export const settingsPartnerBrandsSlider = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 5,
//   arrows: true,
//   autoplay: true,
//   prevArrow: <ArrowBackIosNewIcon />,
//   nextArrow: <ArrowForwardIosIcon />,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// };
{/* Partner Brands */ }
// export const partnerBrandsData = [
//   { image: alga },
//   { image: allmaleinc },
//   { image: dyson },
//   { image: footlogix },
//   { image: innoluxe },
//   { image: kanpeki },
//   { image: kerastase },
//   { image: loreal },
//   { image: thalgo },
// ];

// Our Blog 
// export const blogData = [
//   {
//     image: blog1,
//     title: 'Beauty Bee Salon: Where Expertise Meets Exceptional Haircuts',
//     description: ["Beauty Bee Salon stands as a beacon of excellence in the world of hair care."]
//   },
//   {
//     image: blog2,
//     title: "Beauty Bee Salon: Elevate Your Look with Stunning Hair Color",
//     description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
//   },
//   {
//     image: blog3,
//     title: "Beauty Bee Salon: Crafting Timeless Bridal Elegance",
//     description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
//   },
// ];




// export const counterData = [
//   {
//     icon: <CalendarMonthIcon className="h-6 w-7" />,
//     count: 2017,
//     title: 'Lorem ipsum',
//   },
//   {
//     icon: <GroupsIcon className="h-6 w-7" />,
//     count: 15,
//     title: "Lorem ipsum",
//   },
//   {
//     icon: <HomeWorkIcon className="h-6 w-7" />,
//     count: 2,
//     title: "Lorem ipsum",
//   },

// ];


// Vision Mission Tab 
// -----------------------------------------
// export const tabsVisionMissoin = [
//   {
//     icon: <ModeStandbyIcon />,
//     title: 'Mission',
//     id: 0,
//   },
//   {
//     icon: <VisibilityIcon />,
//     title: 'Vision',
//     id: 1,
//   },
//   {
//     icon: <CheckBoxIcon />,
//     title: 'Motto',
//     id: 2,
//   },
//   {
//     icon: <CheckBoxIcon />,
//     title: 'Objectives',
//     id: 3,
//   },
// ];

// export const tabsContentVisionMissoin = [
//   {
//     id: 0,
//     title: 'Our Mission',
//     detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
//   },
//   {
//     id: 1,
//     title: 'Our Vision',
//     detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
//   },
//   {
//     id: 2,
//     title: 'Our Motto',
//     detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
//   },
//   {
//     id: 3,
//     title: 'Objectives of Organic Farming',
//     style: 'decimal',
//     detail: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
//   },
// ];






// Why Choose GROW MORE ?
export const WhyChooseData = [
  { icon: <ThumbUpIcon />, title: 'World-Class Quality' },
  { icon: <AccessAlarmsIcon />, title: 'Timely Delivery' },
  { icon: <NearMeIcon />, title: 'Modern Technology' },
  { icon: <CurrencyRupeeIcon />, title: 'Affordable Prices' },
  { icon: <HeadphonesIcon />, title: 'Customer Support' },
  { icon: <LocationOnIcon />, title: 'Wide Network' },
  { icon: <PeopleIcon />, title: 'Lifetime Membership' },
  { icon: <CheckBoxIcon />, title: 'Reliable & Trusted Services' },

];