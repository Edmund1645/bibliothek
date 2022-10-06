import React from "react";

interface Props {
  searchString: string;
  isLoading: boolean;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  onTriggerSearch: () => void;
}

const SearchInput = ({
  searchString,
  isLoading,
  setSearchString,
  onTriggerSearch,
}: Props) => {
  return (
    <div className="flex">
      <input
        type="text"
        className="w-full p-1 px-2 outline-none"
        placeholder="Enter title..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onTriggerSearch()}
      />
      <button
        onClick={onTriggerSearch}
        className="px-3 text-white bg-yellow-600 w-20"
      >
        {isLoading ? "..." : "Search"}
      </button>
    </div>
  );
};

export default SearchInput;
