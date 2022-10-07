import { useContext } from "react";
import { getLargeImage } from "../api/covers";
import { ModalContext } from "../contexts/modal";

const BookDetailsModal = () => {
  const { state, dispatch } = useContext(ModalContext);

  const handleModalClose = () => {
    dispatch({ type: "CLOSE_MODAL", payload: state.checkedOutBook });
  };

  return state.modalOpen ? (
    <div className="fixed top-0 right-0 w-full h-screen z-20 bg-black bg-opacity-40 px-5 flex items-center">
      <div className="bg-neutral-800 p-5 w-full max-w-screen-md max-h-[600px] md:max-h-[760px] overflow-y-scroll mx-auto relative">
        <button
          className="h-8 w-8 md:h-10 md:w-10 bg-neutral-500 bg-opacity-80 rounded-full absolute right-5 top-5 text-white"
          onClick={handleModalClose}
        >
          X
        </button>
        <img
          className="w-full"
          src={getLargeImage(state.checkedOutBook.cover_i)}
          alt={`cover for ${state.checkedOutBook.title}`}
        />
      </div>
    </div>
  ) : null;
};

export default BookDetailsModal;
