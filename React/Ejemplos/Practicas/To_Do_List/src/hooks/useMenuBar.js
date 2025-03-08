import { useState } from "react";

export function useMenuBar() {
  const [searchText, setSearchText] = useState("");

  const handleTextInputChange = (value) => {
    setSearchText(value);
  };

  const handleSearchClick = () => {
    console.log("Buscando:", searchText);
  };

  return {
    searchText,
    handleTextInputChange,
    handleSearchClick
  };
}
