import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { startStandaloneServer } from "@Apollo/server/standalone";

console.log("백엔드 프로그램을 실행합니다.");

// 1. API-DOCS 만들기
console.log("여기서 API를 만들거에요.");
const typeDefs = `#graphql
type MyBoard {
  number: Int
  writer: String
  title: String
  contents: String
}

type Query {
  fetchBoards: [MyBoard]
}

type Mutation {
  createBoard: String
}
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      Board.find();

      // 2. 한개만 꺼내기
      const result = await Board.findOne({
        where: { number: 3 },
      });
    },
  },

  Mutation: {
    createBoard: (parent: any, args: any, context: any, info: any) => {
      Board.insert({
        ...args,
      });
      return "게시글 등록에 성공했어요!!";
    },
  },
};

// 3. API-DOCS와 API를 그룹핑한 아폴로서버 만들기
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 4. 최종 완성된 아폴로서버 실행시키기(리스닝하기 -> 대기하기)
startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("여기서 DB에 접속하고 테이블을 만들거에요.");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5032,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다. 동기화 할게요!!!");
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.", error);
  });
