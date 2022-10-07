import { useContext } from "react";

import { BookSchema } from "../@types/search";
import { ModalContext } from "../contexts/modal";

import ListPreviewCard from "./ListPreviewCard";

interface Props {
  books: BookSchema[];
}

const ListView = ({ books }: Props) => {
  const { state, dispatch } = useContext(ModalContext);

  const handleThumbnailClick = (currentBook: BookSchema) => {
    dispatch({ type: "OPEN_MODAL", payload: currentBook });
  };

  return (
    <div className="mt-4">
      {books.map((book) => (
        <ListPreviewCard
          book={book}
          key={book.key}
          onThumbnailClick={() => handleThumbnailClick(book)}
        />
      ))}
    </div>
  );
};

export default ListView;
