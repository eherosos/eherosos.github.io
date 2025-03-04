// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import Marquee from "react-fast-marquee";

// const links = [
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/IzGfAxEnJ6g?si=ak2qKs3H3RKSC4br"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/yqq3uyKU0QU?si=K_G6Wyn5HVPqIr31"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/FwUeRzEop7E?si=LQE9njossPv93t8v"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/sBeK_C0hOeU?si=TCQvTFNdrco87O8A"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/5m26tV8RJC0?si=wmBbuisHWvFmEchl"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/VRxHOjXV4eI?si=SadgqfJT-Lx4164q"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/XTRBar3r5H0?si=cxRlVPMgKCOz_5Ec"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/XRs5Kng2sYk?si=FNojAOvJIkHD8mGp"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
//    <iframe
//       height="315"
//       src="https://www.youtube.com/embed/Ztfpn3yldlI?si=VGTA__pjRfwgnJ7d"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//    ></iframe>,
// ];
const links = [
   "https://www.youtube.com/embed/IzGfAxEnJ6g?si=ak2qKs3H3RKSC4br",
   "https://www.youtube.com/embed/yqq3uyKU0QU?si=K_G6Wyn5HVPqIr31",
   "https://www.youtube.com/embed/FwUeRzEop7E?si=LQE9njossPv93t8v",
   "https://www.youtube.com/embed/sBeK_C0hOeU?si=TCQvTFNdrco87O8A",
   "https://www.youtube.com/embed/5m26tV8RJC0?si=wmBbuisHWvFmEchl",
   "https://www.youtube.com/embed/VRxHOjXV4eI?si=SadgqfJT-Lx4164q",
   "https://www.youtube.com/embed/XTRBar3r5H0?si=cxRlVPMgKCOz_5Ec",
   "https://www.youtube.com/embed/XRs5Kng2sYk?si=FNojAOvJIkHD8mGp",
   "https://www.youtube.com/embed/Ztfpn3yldlI?si=VGTA__pjRfwgnJ7d",
];

const ShortClipComponent = () => {
   return (
      <div className="">
         <p className="my-3 text-2xl font-semibold text-center sm:text-start">Video Editor Project</p>
         <div className="not-sm:hidden">
            <Marquee>
               {links.map((link, index) => (
                  <iframe
                     className="mx-2"
                     key={index}
                     height="240"
                     src={link}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                  ></iframe>
               ))}
            </Marquee>
         </div>
         <div className="sm:hidden">
            <Marquee>
               {links.map((link, index) => (
                  <iframe
                     key={index}
                     height="315"
                     src={link}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                  ></iframe>
               ))}
            </Marquee>
         </div>
         <div className="mt-3"></div>
         <a
            href="https://youtube.com/playlist?list=PLahHtz4m_sxDk94OSUKquFFzLAtJmtvpS&si=4_1FjoiAvW6uyRe9"
            className="text-blue-500"
         >
            <p className="text-center sm:text-end">more</p>
         </a>
      </div>
   );
};
export default ShortClipComponent;
