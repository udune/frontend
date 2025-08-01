import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/commons/layout";
import ApolloUploadSetting from "@/commons/settings/18-01-apollo-upload-setting";

const 철수의폰트 = localFont({
  src: "../../fonts/00-myfont01.woff2",
  variable: "--철수의폰트변수",
  weight: "100 900",
});

const 글로벌폰트 = localFont({
  src: "../../fonts/00-myfont02.woff2",
  variable: "--글로벌폰트변수",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "철수의 홈페이지",
  description: "반갑습니다. 철수의 홈페이지에 오신 것을 환영합니다!",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="ko">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        <div>=========여기 위는 레이아웃입니다=========</div>
        <ApolloUploadSetting>
          <Layout>{children}</Layout>
        </ApolloUploadSetting>
        <div>=========여기 아래는 레이아웃입니다=========</div>
      </body>
    </html>
  );
}

/*

  [ Next 실행 순서 ]

  1. 주소창에 주소 입력
    => http://localhost:3000/

  2. 입력된 주소의 폴더 안에 page.tsx 찾기
    => app/page.tsx (ex, 주소: /mypage 라면? app/mypage/page.tsx 찾기)

  3. 해당 페이지 컴포넌트를 통째로 props에 넣어서 실행하기
    <RootLayout children={페이지컴포넌트} />
    
*/
