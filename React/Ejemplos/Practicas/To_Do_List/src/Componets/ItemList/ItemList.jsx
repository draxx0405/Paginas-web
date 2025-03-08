import { useState, useEffect } from "react";
import { Checkbox, Box, Button } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import AlertInput from "../AlertInput/AlertInput";
import { useAlertInput } from "../../hooks/useAlertInput";
import { useNewElementClick } from "../../hooks/useNewElementClick";

export default function ItemList({ text }) {
  const { statusAlert, handlePlusClick, setStatusAlert } = useNewElementClick();
  const { nameList, handleNameListInputChange, setNameList } = useAlertInput();
  const [inputText, setInputText] = useState(text);

  // Inicializa `nameList` con el valor de `text` cuando el componente se monta
  useEffect(() => {
    setNameList(text);
  }, [text, setNameList]);

  const handleSaveClick = () => {
    if (nameList.trim()) {
      setNameList(nameList,inputText); // Actualiza `nameList` con el valor de `inputText`
      setInputText("");
      setStatusAlert(false);
    }
  };

  return (
    <Box>
      {statusAlert ? (
        <AlertInput
          onChangeInputText={handleNameListInputChange}
          onClickSave={handleSaveClick}
          onClose={() => setStatusAlert(false)}
          Titulo="Tarea"
          Descripcion="Cambiar el nombre de la tarea"
        />
      ) : (
        <Box display="flex" gap="10px">
          <Checkbox>{nameList}</Checkbox>
          <Button onClick={handlePlusClick} backgroundColor={"white"}>
            <MdEdit />
          </Button>
        </Box>
      )}
    </Box>
  );
}