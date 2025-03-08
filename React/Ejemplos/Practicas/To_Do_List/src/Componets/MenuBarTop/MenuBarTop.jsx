import { Box, Input, Text,Button } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";

export default function MenuBarTop({onClickSearch, onTextInputChange }) {
  return (
    <Box
        width="100%" 
        minWidth="100vw" 
        height="70px" 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        padding="0 20px" 
        top="0" 
        left="0" 
        gap="10px"
    >
      <Text fontSize="xl" color="black" display="flex" alignItems="center">
        <FcTodoList size={50} style={{ marginRight: "10px" }} /> 
        To Do List
      </Text>
      <Input
        placeholder="Escribe una tarea..."
        width="50%" 
        bgColor="white"
        _placeholder={{ color: "gray.500" }} 
        onChange={(e)=> onTextInputChange(e.target.value)}
      />
      <Button fontSize="xl" bgColor={"#127357"} color={"#FFFFFF"} onClick={onClickSearch}>Buscar</Button>
    </Box>
  );
}