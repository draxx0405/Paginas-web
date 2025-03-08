import { Alert, AlertIcon, AlertTitle, AlertDescription, Button, Input,Box} from "@chakra-ui/react";

export default function AlertInput({ onChangeInputText, onClickSave, onClose, Titulo, Descripcion}) {

  return (
    <Alert
      status="info"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="400px"
      borderRadius="lg"
      boxShadow="lg"
      zIndex={1000}
    >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">{Titulo}</AlertTitle>
        <AlertDescription maxWidth="sm">{Descripcion}</AlertDescription>
        <Input
        placeholder="Escribe aqui"
        width="50%" 
        bgColor="white" 
        _placeholder={{ color: "gray.500" }}
        onChange={(e) => onChangeInputText(e.target.value)}
        />
        <Box display="flex" gap={10}>
        <Button mt={4} colorScheme="blue" onClick={onClickSave}>Guardar</Button>
        <Button mt={4} colorScheme="red" onClick={onClose}>Cancelar</Button>
        </Box>
    </Alert>
  );
}