import { useState, useEffect } from "react";
import { BookSchema } from "../@types/search";

const usePagination = (items: BookSchema[], itemsPerPage: number) => {
  const [currentItems, setCurrentItems] = useState<BookSchema[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return {
    currentItems,
    pageCount,
    handlePageClick,
  };
};

export default usePagination;
