import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react';


export default function ContainerNotes() {
  return (
    <Box
        width="100%" // Ocupa todo el ancho disponible
        minWidth="100vw" // Asegura que ocupe el 100% del ancho de la ventana
        display="flex" // Usa flexbox para alinear el contenido
        alignItems="center" // Centra el contenido verticalmente
        justifyContent="center" // Espacio entre el texto y el input
        padding="0 20px" // Añade un poco de padding a los lados
        gap="10px">
        


    <Card maxW="sm"  borderRadius="lg" boxShadow="lg" width={"100%"} >
      <CardHeader>
        <Heading size="md">Título de la Tarjeta</Heading>
      </CardHeader>

      <CardBody>
        <Image src="https://via.placeholder.com/300" alt="Card Image" borderRadius="md" mb={4} />
        <Text>
          Esta es una tarjeta simple usando Chakra UI. Aquí puedes poner una breve descripción de lo que contiene la tarjeta.
        </Text>
      </CardBody>

      <CardFooter>
        <Button colorScheme="teal" width="100%">
          Acción
        </Button>
      </CardFooter>
    </Card>
      
    </Box>
  );
}

