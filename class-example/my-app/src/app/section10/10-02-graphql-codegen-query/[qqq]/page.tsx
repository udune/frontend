/* eslint-disable @typescript-eslint/no-unused-expressions */

"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

// const FETCH_BOARD = gql`
//   query fetchBoard($mynumber: Int) {
//     fetchBoard(number: $mynumber) {
//       number
//       writer
//       title
//       contents
//     }
//   }
// `;

export default function StaticRoutingMovedPage() {
  const params = useParams();
  params.qqq;

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      mynumber: Number(params.qqq),
    },
  });

  console.log(data);

  return (
    <>
      <div>1번 게시글 상세페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
