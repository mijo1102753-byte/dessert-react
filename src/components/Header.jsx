import React from "react";

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
            <li>
              <a href="#">헤더 영역</a>
            </li>
            <li>
              <a href="#">슬라이드 영역</a>
            </li>
            <li>
              <a href="#">배너 영역</a>
            </li>
            <li>
              <a href="#">컨텐츠 영역</a>
            </li>
            <li>
              <a href="#">푸터 영역</a>
            </li>
          </ul>
        </div>
        <div className="header_member">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
