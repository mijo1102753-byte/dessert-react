import React from "react";

const Image = () => {
  return (
    <section id="imageType" className="section">
      <h1 className="blind">이미지 유형 만들기</h1>
      <h2>프리미어 케이크와 디저트를 만나보세요</h2>
      <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
      <div className="image_inner container">
        <article className="image img1">
          <h3 className="image_title">베리밤 레드 케이크</h3>
          <p className="image_desc">
            강렬한 레드시트에 고소한 생크림과 상큼한 딸기 콤포트를 샌드하고 신선한 생딸기를 가득 올린 케이크 콤포트를
            샌드하고 신선한 생딸기를 가득 올린 케이크
          </p>
          <p className="image_btn">자세히 보기</p>
        </article>
        <article className="image img2">
          <h3 className="image_title">스트로베리 초콜릿 생크림</h3>
          <p className="image_desc">
            한가득 올린 상큼한 딸기, 크런치 초코볼이 초콜릿 생크림 사이사이 씹히는 투썸 시그니처 케이크 사이사이 씹히는
            투썸 시그니처 케이크
          </p>
          <p className="image_btn choco">자세히 보기</p>
        </article>
      </div>
    </section>
  );
};

export default Image;
