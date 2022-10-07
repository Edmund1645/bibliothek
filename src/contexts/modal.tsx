import {
  createContext,
  Reducer,
  Dispatch,
  useReducer,
  FC,
  PropsWithChildren,
} from "react";
import { BookSchema } from "../@types/search";

type InitialState = {
  modalOpen: boolean;
  checkedOutBook: BookSchema;
};

type Action = {
  type: "OPEN_MODAL" | "CLOSE_MODAL";
  payload: BookSchema;
};

type ContextValue = {
  state: InitialState;
  dispatch: Dispatch<Action>;
};

const initialState: InitialState = {
  modalOpen: false,
  checkedOutBook: {} as BookSchema,
};

const ModalContext = createContext<ContextValue>({} as ContextValue);

const modalReducer: Reducer<InitialState, Action> = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { modalOpen: true, checkedOutBook: action.payload };
    case "CLOSE_MODAL":
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
