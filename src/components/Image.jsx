import React from "react";
import { imageData } from "../data/imageData";

const Image = (props) => {
  return (
    <section id="imageType" className="section">
      <h1 className="blind">{props.title}</h1>
      <h2>프리미어 케이크와 디저트를 만나보세요</h2>
      <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
      <div className="image_inner container">
        {imageData.map((image) => (
          <article className={`image ${image.className}`} key={image.id}>
            <h3 className="image_title">{image.title}</h3>
            <p className="image_desc">{image.desc}</p>
            <p className={`image_btn ${image.btnClass}`}>자세히 보기</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Image;
