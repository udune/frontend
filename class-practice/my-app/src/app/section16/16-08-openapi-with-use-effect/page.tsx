"use client";

import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const 나만의함수 = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await result.json();

      setImageUrl(data.message);
    };
    나만의함수();
  }, []);

  return (
    <>
      <img src={imageUrl} />
    </>
  );
}
