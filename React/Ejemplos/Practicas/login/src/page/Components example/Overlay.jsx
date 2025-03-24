import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  useDisclosure,
  VStack,
  Text
} from "@chakra-ui/react";

function OverlayExample() {
  // Estados y hooks para controlar la visibilidad de los componentes
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useDisclosure();
  const {
    isOpen: isPopoverOpen,
    onOpen: onPopoverOpen,
    onClose: onPopoverClose,
  } = useDisclosure();

  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={6} align="start">
        {/* Modal */}
        <Box>
          <Button colorScheme="teal" onClick={onModalOpen}>
            Abrir Modal
          </Button>
          <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Este es un Modal</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Contenido del modal.</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={onModalClose}>
                  Cerrar
                </Button>
                <Button variant="ghost">Guardar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        {/* Drawer */}
        <Box>
          <Button colorScheme="teal" onClick={onDrawerOpen}>
            Abrir Drawer
          </Button>
          <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} placement="right">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>Este es un Drawer</DrawerHeader>
              <DrawerBody>
                <Text>Contenido del drawer.</Text>
              </DrawerBody>
              <DrawerFooter>
                <Button colorScheme="teal" mr={3} onClick={onDrawerClose}>
                  Cerrar
                </Button>
                <Button variant="ghost">Guardar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>

        {/* AlertDialog */}
        <Box>
          <Button colorScheme="red" onClick={onAlertDialogOpen}>
            Abrir AlertDialog
          </Button>
          <AlertDialog
            isOpen={isAlertDialogOpen}
            onClose={onAlertDialogClose}
            leastDestructiveRef={undefined}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader>Confirmar acción</AlertDialogHeader>
              <AlertDialogBody>
                ¿Estás seguro de que deseas realizar esta acción?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onAlertDialogClose}>Cancelar</Button>
                <Button colorScheme="red" ml={3}>
                  Confirmar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>

        {/* Menu */}
        <Box>
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

        {/* Popover */}
        <Box>
          <Popover isOpen={isPopoverOpen} onClose={onPopoverClose}>
            <PopoverTrigger>
              <Button colorScheme="teal" onClick={onPopoverOpen}>
                Abrir Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Este es un Popover</PopoverHeader>
              <PopoverBody>
                <Text>Contenido del popover.</Text>
              </PopoverBody>
              <PopoverFooter>
                <Button colorScheme="teal" onClick={onPopoverClose}>
                  Cerrar
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>

        {/* Tooltip */}
        <Box>
          <Tooltip label="¡Hola! Soy un Tooltip" aria-label="A Tooltip">
            <Button colorScheme="teal">Pasa el cursor aquí</Button>
          </Tooltip>
        </Box>
      </VStack>
    </Box>
  );
}

export default OverlayExample;