"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($mynumber: Int) {
    deleteBoard(number: $mynumber) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: {
        mynumber: Number(event?.currentTarget.id),
      },
      refetchQueries: [
        { query: FETCH_BOARDS },
        // {},
        // ...
      ],
    });
  };

  interface IBoard {
    number: number;
    writer: string;
    title: string;
    contents: string;
  }

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el.number}>
          {/* 1. 특별한 이유가 없으면? Fragment로 감싸자 <div/>는 1개 더 그려야 되니까 */}
          {/* 2. Fragment는 <></> , <Fragment></Fragment> */}
          {/* 2. Fragment에 key를 입력하려면? <Fragment key={1}></Fragment> */}
          {/* 4. index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={String(el.number)} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
