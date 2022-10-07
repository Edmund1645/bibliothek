import { useState, useContext } from "react";
import Pagination from "react-paginate";

import { searchBookByTitle } from "./api/search";

import SearchInput from "./components/SearchInput";
import GridView from "./components/GridView";
import ListView from "./components/ListView";
import Toolbar from "./components/Toolbar";
import BookDetailsModal from "./components/BookDetailsModal";

import { ModalProvider } from "./contexts/modal";
import { BooksContext } from "./contexts/books";

import usePagination from "./hooks/pagination";

function App() {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<"list" | "grid">("grid");
  const [itemsPerPage, setItemsPerPage] = useState(100);

  const { state, dispatch } = useContext(BooksContext);

  const { currentItems, pageCount, handlePageClick } = usePagination(
    state.books,
    itemsPerPage
  );

  const searchBooks = async () => {
    try {
      setIsLoading(true);
      const { data } = await searchBookByTitle(searchString);
      dispatch({ type: "SET_BOOKS", payload: data.docs });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <ModalProvider>
      <main className="min-h-screen bg-neutral-800 px-5 py-10">
        <div className="max-w-screen-md mx-auto">
          <h1 className="font-bold mb-4 text-3xl">Bibliothek</h1>
          <SearchInput
            searchString={searchString}
            setSearchString={setSearchString}
            onTriggerSearch={searchBooks}
            isLoading={isLoading}
          />

          <Toolbar
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            view={view}
            setView={setView}
          />

          {view === "grid" ? (
            <GridView books={currentItems} />
          ) : (
            <ListView books={currentItems} />
          )}

          {state.books.length === 0 && (
            <p className="text-center mt-10">
              {isLoading ? "Fetching books..." : "No books to display"}
            </p>
          )}

          <Pagination
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="prev"
            renderOnZeroPageCount={() => null}
            containerClassName="mt-8 flex justify-center items-center"
            disabledClassName="opacity-60 cursor-not-allowed"
            disabledLinkClassName="opacity-60 cursor-not-allowed"
            pageClassName="text-white inline-block mx-3"
            breakClassName="text-white"
            activeClassName="p-2 rounded-full bg-neutral-600"
            nextClassName="text-white"
            previousClassName="text-white"
          />
        </div>

        <BookDetailsModal />
      </main>
    </ModalProvider>
  );
}

export default App;
