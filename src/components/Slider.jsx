import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// const Slider = () => {
//   return (
//     <section id="sliderType">
//       <h2 className="blind">슬라이더 유형</h2>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           <div class="slider_img s1">
//             <div class="desc container">
//               <span>dessert cafe</span>
//               <h3>DESSERT TRENDS</h3>
//               <p>카페와 어울리는 세강의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜 줄거예요!</p>
//               <div class="btn">
//                 <a href="#">자세히 보기</a>
//                 <a href="#" class="brown">
//                   사이트보기
//                 </a>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

const Slider = (props) => {
  return (
    <section id="sliderType">
      <h2 className="blind">{props.title}</h2>

      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="dessert_hero"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`slider_img ${slide.className}`}>
              <div className="desc container">
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>

                <div className="btn">
                  <a href="#">자세히 보기</a>
                  <a href="#" className="brown">
                    사이트보기
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
