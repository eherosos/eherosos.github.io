import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const imgs = [
   "/src/assets/Artie Thumnail 2023-08-04 3.png",
   "/src/assets/Artie Thumnail 2023-08-16.png",
   "/src/assets/Artie Thumnail 2023-09-23.png",
   "/src/assets/Artie Thumnail 2023-11-21.png",
   "/src/assets/Artie Thumnail 2024-02-19 1.png",
   "/src/assets/Jiah Thumnail 2023-08-12 3.png",
   "/src/assets/Jiah Thumnail 2023-09-20 5.png",
   "/src/assets/Jiah Thumnail 2023-10-30 2-2.png",
   "/src/assets/Phelita Thumnail 2024-01-02.png",
];

const ThumpnailComponent = () => {
   return (
      <>
         <p className="text-center font-bold text-5xl mb-4">Gallery</p>
         <div className="">
            <p className="my-3 text-2xl font-semibold text-center sm:text-start">Graphic Project</p>
            <div className="not-sm:hidden">
               <Swiper
                  spaceBetween={50}
                  slidesPerView={3.5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  {imgs.map((img, index) => (
                     <SwiperSlide key={index}>
                        <img src={img} alt="thumbnail" />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="sm:hidden">
               <Swiper
                  spaceBetween={50}
                  slidesPerView={1.5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  {imgs.map((img, index) => (
                     <SwiperSlide key={index}>
                        <img src={img} alt="thumbnail" />
                     </SwiperSlide>
                  ))}
               </Swiper>
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
