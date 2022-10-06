import { BookSchema } from "../@types/search";
import GridPreviewCard from "./GridPreviewCard";

interface Props {
  books: BookSchema[];
}

const GridView = ({ books }: Props) => {
  return (
    <div className="mt-4 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <GridPreviewCard book={book} key={book.key} />
      ))}
    </div>
  );
};

export default GridView;
