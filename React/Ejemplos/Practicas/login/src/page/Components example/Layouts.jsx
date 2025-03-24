import React from "react";
import {
  Box,
  Flex,
  Grid,
  Stack,
  Wrap,
  Center,
  Container,
  Text,
  Button,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function Layouts(){
    return(
        <Box
        height="100vh"
        width="100vw"
         overflowY="auto">

          <Container maxW="container.xl" py={8}>
          {/* Box */}
          <Box bg="teal.500" p={4} borderRadius="md" mb={8}>
            <Text color="white" fontSize="xl">
              Este es un Box
            </Text>
          </Box>
        
          {/* Flex */}
          <Flex bg="blue.500" p={4} borderRadius="md" mb={8} justify="space-between" align="center">
            <Text color="white" fontSize="xl">
              Este es un Flex
            </Text>
            <Button colorScheme="teal">Botón</Button>
          </Flex>
        
          {/* Grid */}
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            bg="purple.500"
            p={4}
            borderRadius="md"
            mb={8}
          >
            <Center bg="white" p={4} borderRadius="md">
              <Text>Item 1</Text>
            </Center>
            <Center bg="white" p={4} borderRadius="md">
              <Text>Item 2</Text>
            </Center>
            <Center bg="white" p={4} borderRadius="md">
              <Text>Item 3</Text>
            </Center>
          </Grid>
        
          {/* Stack (Vertical) */}
          <VStack bg="orange.500" p={4} borderRadius="md" mb={8} spacing={4}>
            <Text color="white" fontSize="xl">
              Este es un Stack Vertical
            </Text>
            <Button colorScheme="teal">Botón 1</Button>
            <Button colorScheme="teal">Botón 2</Button>
          </VStack>
        
          {/* Stack (Horizontal) */}
          <HStack bg="pink.500" p={4} borderRadius="md" mb={8} spacing={4}>
            <Text color="white" fontSize="xl">
              Este es un Stack Horizontal
            </Text>
            <Button colorScheme="teal">Botón 1</Button>
            <Button colorScheme="teal">Botón 2</Button>
          </HStack>
        
          {/* Wrap */}
          <Wrap bg="yellow.500" p={4} borderRadius="md" mb={8} spacing={4}>
            <Text color="white" fontSize="xl">
              Este es un Wrap
            </Text>
            <Button colorScheme="teal">Botón 1</Button>
            <Button colorScheme="teal">Botón 2</Button>
            <Button colorScheme="teal">Botón 3</Button>
            <Button colorScheme="teal">Botón 4</Button>
            <Button colorScheme="teal">Botón 5</Button>
          </Wrap>
        
          {/* Center */}
          <Center bg="red.500" p={4} borderRadius="md" mb={8} h="100px">
            <Text color="white" fontSize="xl">
              Este es un Center
            </Text>
          </Center>
        
          {/* Container */}
          <Box bg="gray.500" p={4} borderRadius="md">
            <Text color="white" fontSize="xl">
              Este es un Container
            </Text>
          </Box>
        </Container>
      </Box>
    )
}