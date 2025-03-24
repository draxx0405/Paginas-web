import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  IconButton,
  Checkbox,
  UnorderedList,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";


export default function app(){
  
  return(
    <Box justifyContent="center" width="100vw" minWidth="100%" height="vh" minHeight="100%" display="flex">
      <Card 
      variant="elevated"
      minWidth="80%" 
      width="80vw" 
      height="25%" 
      minHeight="25vh"
      backgroundColor="#A30B37"
      >
          <CardHeader display="flex" justifyContent="space-between" alignItems="center">
              <Heading size='md' color="white"> Titulo</Heading>
          </CardHeader>
          <CardBody>
              <Text color="white">Contenido</Text>
              <Checkbox color="white">Tarea 1</Checkbox>
                  <UnorderedList color="white">
                      <ListItem>Elemento 1</ListItem>
                  </UnorderedList>
          </CardBody>
      </Card>
    </Box>
      
      
  )
}
