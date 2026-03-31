import React from "react";

const Slider = () => {
  return (
    <section id="sliderType">
      <h2 className="blind">슬라이더 유형</h2>
      <div className="slider_img s1">
        <div className="desc container">
          <span>dessert cafe</span>
          <h3>DESSERT TRENDS</h3>
          <p>카페와 어울리는 세강의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜 줄거예요!</p>
          <div className="btn">
            <a href="#">자세히 보기</a>
            <a href="#" className="brown">
              사이트보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
