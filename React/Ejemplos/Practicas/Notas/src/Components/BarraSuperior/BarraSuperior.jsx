import { FaRegNoteSticky } from "react-icons/fa6";
import {Box, Heading, Input, Button} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function BarraSuperior(){
    
    return(
        <Box 
            backgroundColor="#A30B37" 
            padding={5}
            display="flex"
            gap={15}
            alignItems="center"
            justifyContent="center"
            minWidth="100%" 
            width="100vw" 
            >
            <Heading color="White" ml={15}>Notas</Heading>
            <Box display="flex" width="50%" height="40px" alignItems="center" gap={2} backgroundColor="white" pl={2} >
                <FaSearch color="195457" /><Input backgroundColor="white" border="none" borderRadius={0} fontSize={20}></Input>
            </Box>
            <Button height="40px" backgroundColor="#BD6B73" borderColor="#A30B37" borderWidth={2} color="white" _hover={{backgroundColor:"#A30B37"}} >Buscar</Button>
        </Box>
    );
}