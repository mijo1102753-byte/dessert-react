import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Slider title="슬라이더 유형" />
      <Image title="이미지 유형 만들기" />
      <ImageText title="이미지 텍스트 유형 " />
      <Card title="카페, 그 이상의 문화를 만들다" />
      <Banner title="특별함으로 물들어요" />
      <Text title="다채로운 베이커리 컬렉션" />
      <Footer />
    </>
  );
};

export default App;
