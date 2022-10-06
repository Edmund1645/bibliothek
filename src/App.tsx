import { useState } from "react";
import { searchBookByTitle } from "./api/search";
import { BookSchema } from "./@types/search";

import SearchInput from "./components/SearchInput";
import GridView from "./components/GridView";
import ListView from "./components/ListView";

function App() {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<"list" | "grid">("grid");

  const [books, setBooks] = useState<BookSchema[]>([]);

  const searchBooks = async () => {
    try {
      setIsLoading(true);
      const { data } = await searchBookByTitle(searchString);
      setBooks(data.docs.slice(0, 100)); // only first 100
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-800 px-5 py-10">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-bold mb-4 text-3xl">Bibliothek</h1>
        <SearchInput
          searchString={searchString}
          setSearchString={setSearchString}
          onTriggerSearch={searchBooks}
          isLoading={isLoading}
        />

        {view === "grid" ? (
          <GridView books={books} />
        ) : (
          <ListView books={books} />
        )}

        {books.length === 0 && <p>No books to display</p>}
      </div>
    </main>
  );
}

export default App;
