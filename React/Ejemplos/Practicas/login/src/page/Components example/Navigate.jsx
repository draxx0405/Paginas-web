import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function NavigationExample() {
  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6} align="start">
        {/* Breadcrumb */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Breadcrumb
          </Text>
          <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Categoría</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Producto</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Link */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Link
          </Text>
          <Link href="https://chakra-ui.com" color="teal.500" isExternal>
            Visita Chakra UI
          </Link>
        </Box>

        {/* Menu */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Menu
          </Text>
          <Menu>
            <MenuButton as={Button} colorScheme="teal">
              Abrir Menú
            </MenuButton>
            <MenuList>
              <MenuItem>Opción 1</MenuItem>
              <MenuItem>Opción 2</MenuItem>
              <MenuItem>Opción 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Tabs */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Tabs
          </Text>
          <Tabs>
            <TabList>
              <Tab>Pestaña 1</Tab>
              <Tab>Pestaña 2</Tab>
              <Tab>Pestaña 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Contenido de la pestaña 1.</Text>
              </TabPanel>
              <TabPanel>
                <Text>Contenido de la pestaña 2.</Text>
              </TabPanel>
              <TabPanel>
                <Text>Contenido de la pestaña 3.</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Stepper (Implementación personalizada) */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Stepper
          </Text>
          <Box display="flex" alignItems="center">
            <Box
              width="24px"
              height="24px"
              borderRadius="full"
              bg="teal.500"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              1
            </Box>
            <Box flex="1" height="2px" bg="gray.200" mx={2} />
            <Box
              width="24px"
              height="24px"
              borderRadius="full"
              bg="gray.200"
              color="gray.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              2
            </Box>
            <Box flex="1" height="2px" bg="gray.200" mx={2} />
            <Box
              width="24px"
              height="24px"
              borderRadius="full"
              bg="gray.200"
              color="gray.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              3
            </Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default NavigationExample;