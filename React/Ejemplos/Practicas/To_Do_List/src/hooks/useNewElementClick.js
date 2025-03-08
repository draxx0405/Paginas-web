import { useState } from "react";

export function useNewElementClick() {
  const [statusAlert, setStatusAlert]= useState(false);

  const handlePlusClick = (value) => {
    setStatusAlert(value);
  };
  
  return {
    statusAlert,
    handlePlusClick,
    setStatusAlert
  };
}
