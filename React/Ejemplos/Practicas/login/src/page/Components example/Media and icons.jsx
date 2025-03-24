import React from "react";
import {
  Box,
  Avatar,
  Icon,
  Image,
  Spinner,
  Badge,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaReact, FaSmile } from "react-icons/fa";

function MediaAndIconsExample() {
  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6} align="start">
        {/* Avatar */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Avatar
          </Text>
          <HStack spacing={4}>
            <Avatar name="Juan Pérez" src="https://bit.ly/dan-abramov" />
            <Avatar name="María López" />
            <Avatar>
              <Icon as={FaSmile} boxSize={6} />
            </Avatar>
          </HStack>
        </Box>

        {/* Icon */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Icon
          </Text>
          <HStack spacing={4}>
            <Icon as={FaReact} boxSize={8} color="teal.500" />
            <Icon as={FaSmile} boxSize={8} color="yellow.500" />
          </HStack>
        </Box>

        {/* Image */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Image
          </Text>
          <Image
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            borderRadius="md"
            boxSize="200px"
            objectFit="cover"
          />
        </Box>

        {/* Spinner */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Spinner
          </Text>
          <Spinner size="xl" color="blue.500" />
        </Box>

        {/* Badge */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Badge
          </Text>
          <HStack spacing={4}>
            <Badge colorScheme="green">Activo</Badge>
            <Badge colorScheme="red">Inactivo</Badge>
            <Badge colorScheme="purple">Nuevo</Badge>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default MediaAndIconsExample;