"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard(
    # 타입적는곳
    $writer: String
    $title: String
    $contents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables 이게 $ 역할을 함
      variables: { ...inputs },
    });
    console.log(result);
  };

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // 한 줄일때는 괄호() 필요없음
  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
