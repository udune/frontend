"use client";

import Checkbox from "@/components/11-03-event-bubbling-stop-propagation-component";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

interface IFectchBoards {
  number: number;
  writer: string;
  title: string;
  contents: string;
}

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onClickLike = (event: MouseEvent<HTMLSpanElement>) => {
    event?.preventDefault();

    alert("좋아요가 +1 올랐습니다");
  };

  return (
    <div>
      {data?.fetchBoards?.map((el: IFectchBoards) => {
        <a key={el.number} href="https://naver.com">
          <div key={el.number} id={el.writer}>
            <Checkbox />
            <span style={{ margin: "10px" }}>{el.number}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span onClick={onClickLike}>좋아요</span>
          </div>
        </a>;
      })}
    </div>
  );
}
