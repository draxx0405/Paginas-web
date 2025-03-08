import { useState } from "react";
import { Box, ChakraProvider} from "@chakra-ui/react";
import  MenuBarTop from "./Componets/MenuBarTop/MenuBarTop";
import { useMenuBar } from "./hooks/useMenuBar";
import TabView  from "./Componets/TabView/TabView";
import AlertInput  from "./Componets/AlertInput/AlertInput";
import {useNewElementClick} from "./hooks/useNewElementClick"
import { useAlertInput } from "./hooks/useAlertInput";
import "./App.css";

export default function App() {
  const [titles,setTitles] =useState([]);
  const {searchText, handleTextInputChange, handleSearchClick} = useMenuBar();
  const {statusAlert, handlePlusClick, setStatusAlert}=useNewElementClick();
  const {nameList, handleNameListInputChange, setNameList}=useAlertInput();

  const handleSaveClick=()=>{
    if(nameList.trim()){
      setTitles([...titles,nameList]);
      setNameList("");
      setStatusAlert(false);
    }
  }

  return (
    <ChakraProvider>
      <Box display="block" gap="10px">
        <MenuBarTop onClickSearch={handleSearchClick}onTextInputChange={handleTextInputChange}/>
        <TabView
          titles={titles}  onPlusClick={handlePlusClick}/>
        
        {statusAlert && (
          <AlertInput
            onChangeInputText={handleNameListInputChange} 
            onClickSave={handleSaveClick}
            onClose={() => setStatusAlert(false)}
            Titulo="Nuevo apartado"
            Descripcion="Nuevo apartado"
          />
        )}
      </Box>
    </ChakraProvider>
  );
}
