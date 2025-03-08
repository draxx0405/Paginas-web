import { useState } from "react";

export function useAlertInput() {
  const [nameList, setNameList] = useState("");
  
  const handleNameListInputChange = (value) => {
    setNameList(value);
  };

  return {
    nameList,
    handleNameListInputChange,
    setNameList
  };
}

