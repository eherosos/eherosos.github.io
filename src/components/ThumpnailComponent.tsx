// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import Marquee from "react-fast-marquee";

const imgs = [
   "/Artie Thumnail 2023-08-04 3.png",
   "/Artie Thumnail 2023-08-16.png",
   "/Artie Thumnail 2023-09-23.png",
   "/Artie Thumnail 2023-11-21.png",
   "/Artie Thumnail 2024-02-19 1.png",
   "/Jiah Thumnail 2023-08-12 3.png",
   "/Jiah Thumnail 2023-09-20 5.png",
   "/Jiah Thumnail 2023-10-30 2-2.png",
   "/Phelita Thumnail 2024-01-02.png",
];

const ThumpnailComponent = () => {
   return (
      <>
         <p className="text-center font-bold text-5xl mb-4">Gallery</p>
         <div className="">
            <p className="my-3 text-2xl font-semibold text-center sm:text-start">Graphic Project</p>
            <div className="not-sm:hidden">
               <Marquee>
                  {imgs.map((img, index) => (
                     <img className="mx-2 h-[150px]" key={index} src={img} alt="thumbnail" />
                  ))}
               </Marquee>
            </div>
            <div className="sm:hidden">
               <Marquee>
                  {imgs.map((img, index) => (
                     <img className="mx-2 h-[200px]" key={index} src={img} alt="thumbnail" />
                  ))}
               </Marquee>
            </div>
            <div className="mt-3"></div>
            <a
               href="https://drive.google.com/drive/folders/1BgCYDbSKngerQBLdHPi_JaGxwN6zHcOU?usp=sharing"
               className="text-blue-500"
            >
               <p className="text-center sm:text-end">more</p>
            </a>
         </div>
      </>
   );
};
export default ThumpnailComponent;
