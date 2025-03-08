import { FormControl, Box,Heading, FormLabel,Input,FormErrorMessage ,Button } from "@chakra-ui/react";


function App() {
  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
    <Heading mb={4} textAlign="center">Iniciar Sesión</Heading>
    <form >
      < FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Correo electrónico"  />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl  mb={3}>
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" placeholder="Contraseña"  />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <Button colorScheme="blue" type="submit"  width="full">Ingresar</Button>
    </form>
  </Box>
  );
}

export default App;
