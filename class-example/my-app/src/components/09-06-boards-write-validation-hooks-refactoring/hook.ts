"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./queries";

export const useBoardsWrite = () => {
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
      `/section09/09-06-boards-write-validation-hooks-refactoring/${result.data.updateBoard.number}`
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

  return {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
  };
};
