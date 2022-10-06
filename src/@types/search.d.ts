export type BookSchema = {
  key: string;
  cover_i: number;
  title: string;
  title_suggest: string;
  first_publish_year: number;
  isbn: string[];
  author_name: string[];
};

export type SearchAPIResponse = {
  docs: BookSchema[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
};
