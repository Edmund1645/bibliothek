import { BookSchema } from "../@types/search";
import { getThumbnail } from "../api/covers";
import { truncateString } from "../utils/strings";

interface Props {
  book: BookSchema;
  onThumbnailClick: () => void;
}
const GridPreviewCard = ({ book, onThumbnailClick }: Props) => {
  return (
    <div className="border hover:border-2 hover:rounded border-gray-700 transition-[border] duration-300 p-3">
      {book.cover_i ? (
        <button className="w-full" onClick={onThumbnailClick}>
          <img
            className="w-full h-40 object-cover object-top"
            src={getThumbnail(book.cover_i)}
            alt={`thumbnail for ${book.title}`}
          />
        </button>
      ) : (
        <div className="w-full h-40 flex justify-center items-center bg-neutral-700">
          <p className="text-xs">No thumbnail</p>
        </div>
      )}

      <p className="mt-3" title={book.title}>
        {truncateString(book.title, 30)}
      </p>
      <p className="mt-5 text-sm">
        by <strong>{book.author_name?.join?.(" ") || "N/A"}</strong>
      </p>
    </div>
  );
};

export default GridPreviewCard;
