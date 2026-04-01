import React from "react";
// import { headerData } from "../data/headerData";
import { menuData, memberData } from "../data/headerData";

const Header = () => {
  return (
    <header id="header">
      <div className="header_inner">
        <div className="header_logo">
          <a href="#">
            Dessert<em>site</em>
          </a>
        </div>
        <div className="header_menu">
          <ul>
            {menuData.map((menu, index) => (
              <li key={index}>
                <a href={menu.link}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header_member">
          {memberData.map((mem, index) => (
            <a href="/" key={index}>
              {mem}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
