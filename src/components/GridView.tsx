import { useContext } from "react";

import { BookSchema } from "../@types/search";
import { ModalContext } from "../contexts/modal";

import GridPreviewCard from "./GridPreviewCard";

interface Props {
  books: BookSchema[];
}

const GridView = ({ books }: Props) => {
  const { state, dispatch } = useContext(ModalContext);

  const handleThumbnailClick = (currentBook: BookSchema) => {
    dispatch({ type: "OPEN_MODAL", payload: currentBook });
  };
  return (
    <div className="mt-4 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <GridPreviewCard
          book={book}
          key={book.key}
          onThumbnailClick={() => handleThumbnailClick(book)}
        />
      ))}
    </div>
  );
};

export default GridView;
