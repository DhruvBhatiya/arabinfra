import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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


// Services 
// =================================
export const settingsServicesSlider = {
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
  
  export const slidesServices = [
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