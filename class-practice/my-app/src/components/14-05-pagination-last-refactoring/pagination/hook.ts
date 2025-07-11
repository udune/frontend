import { useState } from "react";

export const usePagination = ({ refetch, lastPage }) => {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    refetch({ mypage: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }

    setStartPage(startPage - 10);
    refetch({ mypage: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ mypage: startPage + 10 });
    }
  };

  return {
    startPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
