import {
  createContext,
  Dispatch,
  Reducer,
  useReducer,
  FC,
  PropsWithChildren,
} from "react";
import { BookSchema } from "../@types/search";

type InitialState = {
  books: BookSchema[];
};

type Action = {
  type: "SET_BOOKS";
  payload: BookSchema[];
};

type ContextValue = {
  state: InitialState;
  dispatch: Dispatch<Action>;
};

const initialState: InitialState = {
  books: [],
};
const BooksContext = createContext<ContextValue>({} as ContextValue);

const booksReducer: Reducer<InitialState, Action> = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { books: action.payload };
    default:
      return state;
  }
};

const BooksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
