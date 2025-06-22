"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard(
    # 타입적는곳
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      _id
      number
      message
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $mynumber: Int
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    updateBoard(
      number: $mynumber
      writer: $mywriter
      title: $mytitle
      contents: $mycontents
    ) {
      _id
      number
      message
    }
  }
`;

interface BoardsWriteProps {
  isEdit: boolean;
  data?: {
    fetchBoard: {
      writer: string;
      title: string;
      contents: string;
    };
  };
}

export default function BoardsWrite(props: BoardsWriteProps) {
  const router = useRouter();
  const params = useParams();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await createBoard({
      // variables 이게 $ 역할을 함
      variables: {
        mynumber: Number(params.number),
        mywriter: writer,
        mytitle: title,
        mycontents: contents,
      },
    });
    console.log(result);
    alert("등록이 완료되었습니다.");
    router.push(
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables: {
      mynumber: number;
      mywriter?: string;
      mytitle?: string;
      mycontents?: string;
    } = { mynumber: Number(params.number) };
    if (writer) myvariables.mywriter = writer;
    if (title) myvariables.mytitle = title;
    if (contents) myvariables.mycontents = contents;

    // 여기서 수정하기
    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    alert("수정이 완료되었습니다.");
    router.push(
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:{" "}
      <input
        type="text"
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
