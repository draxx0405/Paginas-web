import {Card,CardHeader,CardBody,Heading,Text,IconButton,Checkbox,
    UnorderedList,ListItem,Box,Menu,MenuButton,MenuList,MenuItem,
    useDisclosure} from "@chakra-ui/react";
import ViewEditNote from "../ViewEditNote/ViewEditNote";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ContenedorDeNota({controles}){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Card 
        variant="elevated"
        minWidth="80%" 
        width="80vw" 
        height="25%" 
        minHeight="25vh"
        backgroundColor="#A30B37"
        boxShadow={10}
        >
            <CardHeader display="flex" justifyContent="space-between" alignItems="center">
                <Heading size='md' color="white"> Titulo</Heading>
                <ViewEditNote isOpen={isOpen} onClose={onClose} controles={controles}/>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="40px"
                        height="40px"
                        backgroundColor="#A30B37"
                        _hover={{ backgroundColor: "#D1999F" }}
                        icon={<BsThreeDotsVertical size={25} color="white" />}
                    >
                    </MenuButton>
                    <MenuList>
                        {/* Llamamos a onOpen para abrir el modal */}
                        <MenuItem onClick={onOpen}>Abrir notas</MenuItem>
                        <MenuItem>Borrar notas</MenuItem>
                    </MenuList>
                </Menu>
            </CardHeader>
            <CardBody>
                <Box  pointerEvents="none">
                {
                    controles.map((item,index)=>{
                        if (item.tipo=="text"){
                            return <Text color="white" key={index}>{item.text}</Text>
                        }else if(item.tipo=="checkbox"){
                            return <Checkbox  color="white" key={index}>{item.text}</Checkbox>
                        }else if(item.tipo=="list"){
                            return(
                                <UnorderedList  color="white" key={index}>
                                    <ListItem>{item.text}</ListItem>
                                </UnorderedList>);
                        }
                    })
                }
                </Box>
            </CardBody>
        </Card>
    )
}