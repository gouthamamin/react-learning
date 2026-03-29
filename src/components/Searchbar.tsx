import { type ChangeEvent } from "react";

interface iSearchBar {
  searchItem: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: iSearchBar) => {
  const { searchItem, handleSearch } = props;
  console.log("Child : Searchbar rendered")

  return (
    <input className="border-2 border-solid rounded-md"
      value={searchItem} onChange={(e) => handleSearch(e)} />
  );
};

export default SearchBar;
