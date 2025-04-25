import { LoadMoreBtn } from "./Button.styled";
import React from "react";

type ButtonProps = {
  onLoadMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ onLoadMore }: ButtonProps) {
  return <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>;
}
