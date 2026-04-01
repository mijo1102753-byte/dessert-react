import React from "react";
import { textImageData } from "../data/textImageData";

// const ImageText = () => {
//   return (
//     <section id="imgTextType" className="section">
//       <h2 className="blind">이미지 텍스트 유형</h2>
//       <div className="imgText_inner container">
//         <div className="imgText_txt">
//           <div className="small">이미지/텍스트 유형01</div>
//           <h3 className="title">디져트 사이트 살펴보기</h3>
//           <div className="desc">제빵사, 파티시에, 요식업 종사자를 위한 유용한 사이트입니다</div>
//           <ul className="list">
//             <li>
//               <a href="#">투썸플레이스 바로가기기</a>
//             </li>
//             <li>
//               <a href="#">파리바게트 바로가기기</a>
//             </li>
//             <li>
//               <a href="#">뚜레쥬르 바로가기기</a>
//             </li>
//             <li>
//               <a href="#">스타벅스 바로가기기</a>
//             </li>
//             <li>
//               <a href="#">카페베네 바로가기기</a>
//             </li>
//             <li>
//               <a href="#">골드브라운 바로가기기</a>
//             </li>
//           </ul>
//         </div>

//         <div className="imgText_img img1">
//           <a href="#">마카롱 레시피</a>
//         </div>
//         <div className="imgText_img img2">
//           <a href="#" className="hotpink">
//             파르페 레시피
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

const ImageText = (props) => {
  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">{props.title}</h2>

      <div className="imgText_inner container">
        <div className="imgText_txt">
          <span className="small">{textImageData.small}</span>
          <h3 className="title">{textImageData.title}</h3>
          <p className="desc">{textImageData.desc}</p>

          <ul className="list">
            {textImageData.menus.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>{menu.title} 바로가기</a>
              </li>
            ))}
          </ul>
        </div>

        {textImageData.images.map((img, index) => (
          <div className={`imgText_img ${img.class}`} key={index}>
            <a href="#" className={img.color}>
              {img.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
