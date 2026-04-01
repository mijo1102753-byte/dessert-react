import React from "react";
import { textData } from "../data/textData";

const Text = (props) => {
  return (
    <section id="textType" className="section">
      <span>텍스트 유형</span>
      <h2>{props.title}</h2>
      <div className="text_inner container">
        {textData.map((text) => (
          <div className={`text ${text.className}`} key={text.id}>
            <h3 className="text_title">{text.title}</h3>
            <p className="text_desc">{text.desc}</p>
            <a href="#" className="text_btn">
              더보기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Text;
