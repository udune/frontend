"use client";

import Box from "@/components/13-03-props-children2";

export default function 페이지() {
  return (
    <>
      <div>
        <div>++++ 철수 영희 훈이 ++++</div>
        {/* 쏙들어가기, 땡겨오기 */}
        <Box school="다람쥐초등학교">
          <div>
            <input type="text" />
            <button>버튼2</button>
            <span>안녕하세요</span>
          </div>
        </Box>
        <div>++++ 철수 영희 훈이 ++++</div>
      </div>
    </>
  );
}
