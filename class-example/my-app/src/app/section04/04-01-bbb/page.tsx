import Link from "next/link";

const Bbb = () => {
  return (
    <>
      <div>Baa 페이지 입니다.</div>

      <Link href="/section04/04-01-aaa">Aaa 페이지로 갈래요</Link>

      <a href="/section04/04-01-aaa">Aaa 페이지로 갈래요</a>
    </>
  );
};

export default Bbb;
