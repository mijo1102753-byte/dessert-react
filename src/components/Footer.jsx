import React from "react";
import { footerData } from "../data/footerData";

// const Footer = () => {
//   return (
//     <footer id="footerType" className="section">
//       <h2 className="blind">푸터영역</h2>
//       <div className="footer_inner container">
//         <div className="footer_menu">
//           <div>
//             <h2>투썸플레이스 정보</h2>
//             <ul>
//               <li>
//                 <a href="#">브랜드 소개</a>
//               </li>
//               <li>
//                 <a href="#">회사 소개</a>
//               </li>
//               <li>
//                 <a href="#">창업 안내</a>
//               </li>
//               <li>
//                 <a href="#">주문 및 문의</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer_right">
//           2021 A TWOSOME PLACE Co., LTD. <br />
//           All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <footer id="footerType" className="section">
      <h2 className="blind">푸터영역</h2>

      <div className="footer_inner container">
        <div className="footer_menu">
          {footerData.map((menu, index) => (
            <div key={index}>
              <h2>{menu.title}</h2>

              <ul>
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer_right">
          2021 A TWOSOME PLACE Co., LTD. <br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
