import { BookSchema } from "../@types/search";

import ListPreviewCard from "./ListPreviewCard";

interface Props {
  books: BookSchema[];
}

const ListView = ({ books }: Props) => {
  return (
    <div className="mt-4">
      {books.map((book) => (
        <ListPreviewCard book={book} key={book.key} />
      ))}
    </div>
  );
};

export default ListView;
