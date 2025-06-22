"use client";

import { useBoardsWrite } from "./hook";

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
  const {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
  } = useBoardsWrite();

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
