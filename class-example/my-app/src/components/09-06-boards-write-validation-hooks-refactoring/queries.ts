import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
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

export const UPDATE_BOARD = gql`
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
