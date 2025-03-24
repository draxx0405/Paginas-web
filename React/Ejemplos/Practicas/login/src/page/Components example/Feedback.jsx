import React, { useState } from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  Progress,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Button,
  useToast,
  VStack,
} from "@chakra-ui/react";

function FeedbackExample() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleShowToast = () => {
    toast({
      title: "Notificación",
      description: "¡Esta es una notificación de Toast!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };  

  return (
    <Box width="100vw" height="100vh" overflowY="auto">
      <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
        <VStack spacing={6} align="start">
          {/* Alert */}
          <Box width="full">
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle>Información</AlertTitle>
                <AlertDescription>
                  Este es un mensaje de alerta informativo.
                </AlertDescription>
              </Box>
            </Alert>
          </Box>

          {/* CircularProgress */}
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              CircularProgress
            </Text>
            <CircularProgress isIndeterminate color="teal.500" />
          </Box>

          {/* Progress */}
          <Box width="full">
            <Text fontSize="xl" fontWeight="bold">
              Progress
            </Text>
            <Progress value={60} size="sm" colorScheme="purple" />
          </Box>

          {/* Skeleton */}
          <Box width="full">
            <Text fontSize="xl" fontWeight="bold">
              Skeleton
            </Text>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </Box>

          {/* Spinner */}
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Spinner
            </Text>
            <Spinner size="xl" color="blue.500" />
          </Box>

          {/* Toast */}
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Toast
            </Text>
            <Button colorScheme="teal" onClick={handleShowToast}>
              Mostrar Toast
            </Button>
          </Box>

          {/* Simular carga */}
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Simular carga
            </Text>
            <Button
              colorScheme="teal"
              onClick={simulateLoading}
              isLoading={isLoading}
              loadingText="Cargando..."
            >
              {isLoading ? "Cargando..." : "Iniciar carga"}
            </Button>
          </Box>
        </VStack>
      </Box>
      </Box>
  );
}

export default FeedbackExample;