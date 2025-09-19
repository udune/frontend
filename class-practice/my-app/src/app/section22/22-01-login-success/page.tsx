import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      {data?.fetchUserLoggedIn.name}님 환영합니다!
      <h1>로그인 성공</h1>
      <p>환영합니다! 로그인에 성공했습니다.</p>
    </>
  );
}
