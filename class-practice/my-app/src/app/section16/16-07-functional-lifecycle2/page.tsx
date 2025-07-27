"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행!!");

    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []);

  // 2. useEffect 잘못된 사용법(1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  // setCount(10) // setCount는 useEffect 안에 있는 것 비추천
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  console.log("나는 언제 실행되게");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리는 버튼</button>

      <Link href={"/"}>나가기</Link>
    </>
  );
}
