import React from "react";

interface Props {
  view: "list" | "grid";
  setView: React.Dispatch<React.SetStateAction<"list" | "grid">>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Toolbar = ({ view, setView, itemsPerPage, setItemsPerPage }: Props) => {
  return (
    <div className="mt-9 flex justify-between items-center">
      <div>
        <label htmlFor="per-page" className="text-white inline-block mr-3">
          per page
        </label>
        <select
          name="per-page"
          id="per-page"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="flex">
        <button
          className={`px-3 py-1 text-white border rounded-l ${
            view === "list" && "bg-neutral-600"
          }`}
          onClick={() => setView("list")}
        >
          list
        </button>
        <button
          className={`px-3 py-1 text-white border rounded-r ${
            view === "grid" && "bg-neutral-600"
          }`}
          onClick={() => setView("grid")}
        >
          grid
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
