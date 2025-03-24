import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Collapse,
  Button,
  VisuallyHidden,
  VStack,
  Text,
} from "@chakra-ui/react";

function DisclosureExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6} align="start">
        {/* Accordion */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Accordion
          </Text>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Sección 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Contenido de la sección 1.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Sección 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Contenido de la sección 2.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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

        {/* Collapse */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            Collapse
          </Text>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Ocultar" : "Mostrar"} contenido
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box p={4} mt={4} bg="teal.100" borderRadius="md">
              <Text>Este contenido se muestra u oculta con una animación.</Text>
            </Box>
          </Collapse>
        </Box>

        {/* VisuallyHidden */}
        <Box width="full">
          <Text fontSize="xl" fontWeight="bold">
            VisuallyHidden
          </Text>
          <Box position="relative">
            <Button>Botón con texto oculto</Button>
            <VisuallyHidden>
              Este texto está oculto visualmente pero es accesible para lectores
              de pantalla.
            </VisuallyHidden>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default DisclosureExample;