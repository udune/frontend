/* eslint-disable react-hooks/rules-of-hooks */
"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState 못 씀) => 신버전 방식은 뒤에서 배움

import { useState } from "react";

const 카운터 = () => {
  const 결과값 = useState(0);

  const 카운트올리는기능 = () => {
    결과값[1](결과값[0] + 1);
  };

  const 카운트내리는기능 = () => {
    결과값[1](결과값[0] - 1);
  };

  // 함수의 리턴은 1개만 할 수 있음! => 따라서, 하나로 묶자!
  return (
    <>
      <div>{결과값[0]}</div>
      <button onClick={카운트올리는기능}>카운트 올리기!!!</button>
      <button onClick={카운트내리는기능}>카운트 내리기!!!</button>
    </>
  );
};

export default 카운터;
