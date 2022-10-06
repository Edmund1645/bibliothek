const coversBaseURL = "http://covers.openlibrary.org/b/id";

export const getThumbnail = (coverId: number) => {
  return `${coversBaseURL}/${coverId}-M.jpg`;
};

export const getLargeImage = (coverId: number) => {
  return `${coversBaseURL}/${coverId}-L.jpg`;
};
