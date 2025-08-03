"use client";

import { checkValidationFile } from "@/commons/libraries/18-03-image-validation";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard(
    # 타입적는곳
    $createBoardInput: CreateBoardInput
    $mytitle: String
    $mycontents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      number
      message
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef(HTMLInputElement);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = (event) => {
    const file = event.target.files[0]; // 배열로 들어오는 이유 <input type='file' multiple />
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) {
      return;
    }

    const result = uploadFile({ variables: { file } });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);

    const onClickImage = () => {
      fileRef.current.click();
    };
  };

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables 이게 $ 역할을 함
      variables: {
        mywriter: writer,
        mytitle: title,
        mycontents: contents,
      },
    });
    console.log(result);
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
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div style={{ width: "100px", height: "100px" }}>이미지선택</div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
        accept="image/jpg, image/png" // 1. jpg/jpeg 모두 가능 2. 띄어쓰기없이 ,로 구분하기
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
