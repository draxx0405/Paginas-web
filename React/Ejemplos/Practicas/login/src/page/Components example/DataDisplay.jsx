import React from "react";
import {
  Box,
  Badge,
  Code,
  List,
  ListItem,
  ListIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Kbd,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

function DataDisplayExample() {
  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6} align="start">
        {/* Badge */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Badge
          </Text>
          <Badge colorScheme="green">Activo</Badge>{" "}
          <Badge colorScheme="red">Inactivo</Badge>{" "}
          <Badge colorScheme="blue">Nuevo</Badge>
        </Box>

        {/* Code */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Code
          </Text>
          <Code colorScheme="purple">console.log("Hola, mundo!");</Code>
        </Box>

        {/* List */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            List
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Tarea completada
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="yellow.500" />
              Tarea pendiente
            </ListItem>
          </List>
        </Box>

        {/* Stat */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Stat
          </Text>
          <Stat>
            <StatLabel>Visitas</StatLabel>
            <StatNumber>1,234</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>

        {/* Table */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Table
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Edad</Th>
                <Th>Ciudad</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Juan Pérez</Td>
                <Td>25</Td>
                <Td>Ciudad de México</Td>
              </Tr>
              <Tr>
                <Td>María López</Td>
                <Td>30</Td>
                <Td>Madrid</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Kbd */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Kbd
          </Text>
          <Text>
            Presiona <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> para copiar.
          </Text>
        </Box>

        {/* Tooltip */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Tooltip
          </Text>
          <Tooltip label="¡Hola! Soy un Tooltip" aria-label="A Tooltip">
            <Text as="span" textDecoration="underline" cursor="pointer">
              Pasa el cursor aquí
            </Text>
          </Tooltip>
        </Box>
      </VStack>
    </Box>
  );
}

export default DataDisplayExample;