"use client";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log(result); // Promise
  };

  const onClickSync = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await result.json();
    console.log(data);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </>
  );
}
