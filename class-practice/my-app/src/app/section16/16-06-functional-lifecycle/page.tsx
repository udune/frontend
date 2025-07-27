"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  //   componentDidMount()
  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []);

  //   componentDidMount() + componentDidUpdate()
  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  });

  //   componentWillUnmount() => clean-up function 이라고 부름
  useEffect(() => {
    return () => {};
  }, []);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리는 버튼</button>

      <Link href={"/"}>나가기</Link>
    </>
  );
}
