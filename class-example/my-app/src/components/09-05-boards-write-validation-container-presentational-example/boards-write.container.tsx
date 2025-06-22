"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import BoardsWriteUI from "./boards-write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boards-write.queries";

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
      `/section09/09-05-boards-write-validation-container-presentational-example/${result.data.createBoard.number}`
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
      `/section09/09-05-boards-write-validation-container-presentational-example/${result.data.updateBoard.number}`
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
    <BoardsWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
