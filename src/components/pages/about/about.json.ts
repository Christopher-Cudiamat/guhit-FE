//REAL INFOS WILL BE USED SOMEDAY...

import image1 from '../../../images/team/img1.png';
import image2 from '../../../images/team/img2.png';
// import image3 from '../../../images/team/img3.png';
import image4 from '../../../images/team/img4.png';
import image5 from '../../../images/team/img5.png';
// import image6 from '../../../images/team/img6.png';
// import image7 from '../../../images/team/img7.png';


import award1 from '../../../images/about/award3.jpg';
import award2 from '../../../images/about/award2.jpg';
import award3 from '../../../images/about/award1.jpg';
import award4 from '../../../images/about/award4.png';



export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  speed: 1000,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:true,
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



export const teamMembersArr = [
  {

    image: image1,
    nickName: "Tops",
    name: "Christopher Valencia",
    position: "Founder/CEO",

  },
  {
    image: image2,
    nickName: "Simon",
    name: "Simon Lim",
    position: "Front-End/UI/UX",

  },
  // {
  //   image: image3,
  //   nickName: "Kaloy",
  //   name: "Karl Peralta",
  //   position: "Illustrator / Visual artist",

  // },
  {
    image: image4,
    nickName: "Lique",
    name: "Angelique Hernandez",
    position: "Content Manager",
  },
  {
    image: image5,
    nickName: "Mokay",
    name: "Mikhaela Atento",
    position: "Graphic/Web Designer",
  },
  // {
  //   image: image6,
  //   nickName: "Chado",
  //   name: "Richard Glorioso",
  //   position: "Brand Ambassador",
  // },
  // {
  //   image: image7,
  //   nickName: "Rhyan",
  //   name: "Rhyan Burgos",
  //   position: "Software Developer",
  // },
  {
    image: image2,
    nickName: "Jik-Jik",
    name: "Rejik Cauntay",
    position: "Product Manager",
  }
]

export const recognitionsArr = [award1,award2,award3,award4];