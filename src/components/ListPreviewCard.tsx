import { BookSchema } from "../@types/search";
import { getThumbnail } from "../api/covers";
import { truncateString } from "../utils/strings";

interface Props {
  book: BookSchema;
  onThumbnailClick: () => void;
}

const ListPreviewCard = ({ book, onThumbnailClick }: Props) => {
  return (
    <div className="mt-4 border hover:border-2 hover:rounded border-gray-700 transition-[border] duration-300 p-3">
      <div className="flex items-center">
        {book.cover_i ? (
          <button onClick={onThumbnailClick}>
            <img
              className="w-20 md:w-40 h-20 md:h-40 object-cover object-top"
              src={getThumbnail(book.cover_i)}
              alt={`thumbnail for ${book.title}`}
            />
          </button>
        ) : (
          <div className="w-20 md:w-40 h-20 md:h-40 flex justify-center items-center bg-neutral-700">
            <p className="text-xs">No thumbnail</p>
          </div>
        )}

        <div className="ml-4">
          <p title={book.title}>{truncateString(book.title, 35)}</p>
          <p className="mt-3 text-sm">
            by <strong>{book.author_name?.join?.(", ") || "N/A"}</strong>
          </p>
          <p className="mt-2 text-sm">{book.first_publish_year}</p>
          <p className="mt-2 text-sm">isbn: {book.isbn?.[0] || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default ListPreviewCard;
