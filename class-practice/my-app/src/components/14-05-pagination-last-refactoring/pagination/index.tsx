"use client";

import { usePagination } from "./hook";

export default function Pagination({ refetch, lastPage }) {
  const { startPage, onClickPage, onClickNextPage, onClickPrevPage } =
    usePagination({ refetch, lastPage });

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill("철수").map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
