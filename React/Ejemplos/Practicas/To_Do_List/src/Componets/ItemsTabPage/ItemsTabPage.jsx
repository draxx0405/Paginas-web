import {  Box, Button } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import AlertInput from "../AlertInput/AlertInput";
import { useAlertInput } from "../../hooks/useAlertInput";
import { useNewElementClick } from "../../hooks/useNewElementClick";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";


export default function ItemsTabPage(){
  const [itemstext,setItemsText]=useState([]);
  const {statusAlert, handlePlusClick, setStatusAlert}=useNewElementClick();
  const {nameList, handleNameListInputChange, setNameList}=useAlertInput();

  const handleSaveClick=()=>{
    if(nameList.trim()){
      setItemsText([...itemstext,nameList]);
      setNameList("");
      setStatusAlert(false);
    }
  }


  return(
    <Box justifyItems="center">
      <Box justifyItems="left" width="95%"  padding={2} ml={20} mr={20} >
        {itemstext.map((itemtext,index)=>
          <Box key={index} mt="5px">
            <ItemList text={itemtext}/>
          </Box>
        )}
      </Box>
      <Box display="flex" justifyContent="center" padding={10}>
        <Button onClick={handlePlusClick}>Agregar nueva tarea</Button>
        {statusAlert && (
            <AlertInput
              onChangeInputText={handleNameListInputChange} 
              onClickSave={handleSaveClick}
              onClose={() => setStatusAlert(false)}
              Titulo="Nueva Tarea"
              Descripcion="Escribe la nueva tarea!"
            />
        )}
      </Box>
    </Box>
  )
}