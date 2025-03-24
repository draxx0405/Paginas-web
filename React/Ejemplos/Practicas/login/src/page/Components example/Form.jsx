import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

function FormExample() {
  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6}>
        {/* Input */}
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input placeholder="Ingresa tu nombre" />
        </FormControl>

        {/* Textarea */}
        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Textarea placeholder="Ingresa una descripción" />
        </FormControl>

        {/* Select */}
        <FormControl>
          <FormLabel>País</FormLabel>
          <Select placeholder="Selecciona un país">
            <option value="mx">México</option>
            <option value="us">Estados Unidos</option>
            <option value="es">España</option>
          </Select>
        </FormControl>

        {/* Checkbox */}
        <FormControl>
          <FormLabel>Intereses</FormLabel>
          <VStack align="start">
            <Checkbox value="deportes">Deportes</Checkbox>
            <Checkbox value="musica">Música</Checkbox>
            <Checkbox value="viajes">Viajes</Checkbox>
          </VStack>
        </FormControl>

        {/* Radio */}
        <FormControl>
          <FormLabel>Género</FormLabel>
          <RadioGroup defaultValue="masculino">
            <HStack spacing={4}>
              <Radio value="masculino">Masculino</Radio>
              <Radio value="femenino">Femenino</Radio>
              <Radio value="otro">Otro</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        {/* Switch */}
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">¿Recibir notificaciones?</FormLabel>
          <Switch colorScheme="teal" />
        </FormControl>

        {/* Botón de envío */}
        <Button colorScheme="teal" width="full">
          Enviar
        </Button>
      </VStack>
    </Box>
  );
}

export default FormExample;