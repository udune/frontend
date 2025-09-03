export default function MapElPage() {
  // 1. 기본방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수 변경 방법
  ["철수", "영희", "훈이"].forEach((name, idx) => {
    console.log("el: ", name);
    console.log("index: ", idx);
  });

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function logNameAndIndex(
    name: string,
    idx: number
  ) {
    console.log("el: ", name);
    console.log("index: ", idx);
  });

  // 4. el과 index를 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return <></>;
}
