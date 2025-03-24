import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Button, Checkbox, UnorderedList, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import Inputedit from '../InputEdit/Inputedit';

export default function ViewEditNote({ onClose, isOpen, controles, onSave }) {
  // Estado para manejar los valores de los inputs
  const [values, setValues] = useState(controles.map(item => item.text));

  // Función para manejar cambios en los inputs
  const handleInputChange = (index, newValue) => {
      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);
  };

  // Función para guardar los valores
  const handleSave = () => {
      // Actualiza los controles con los nuevos valores
      const updatedControles = controles.map((item, index) => ({
          ...item,
          text: values[index], // Actualiza el texto con el nuevo valor
      }));

      // Llama a la función onSave pasada como prop
      onSave(updatedControles);

      // Cierra el modal
      onClose();
  };

  return (
      <Modal onClose={onClose} size="xl" isOpen={isOpen} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent backgroundColor="#A30B37">
              <ModalHeader color="white">Titulo</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  {controles.map((item, index) => {
                      if (item.tipo === "text") {
                          return (
                              <Inputedit
                                  key={index}
                                  texto={values[index]}
                                  onChange={(e) => handleInputChange(index, e.target.value)}
                              />
                          );
                      } else if (item.tipo === "checkbox") {
                          return <Checkbox color="white" key={index}>{item.text}</Checkbox>;
                      } else if (item.tipo === "list") {
                          return (
                              <UnorderedList color="white" key={index}>
                                  <ListItem>
                                      <Inputedit
                                          key={index}
                                          texto={values[index]}
                                          onChange={(e) => handleInputChange(index, e.target.value)}
                                      />
                                  </ListItem>
                              </UnorderedList>
                          );
                      }
                      return null; // En caso de que no coincida con ningún tipo
                  })}
              </ModalBody>
              <ModalFooter>
                  {/* Botón para guardar */}
                  <Button onClick={handleSave} backgroundColor="white" mr={3}>
                      Guardar
                  </Button>
                  {/* Botón para cerrar */}
                  <Button onClick={onClose} backgroundColor="white">
                      Close
                  </Button>
              </ModalFooter>
          </ModalContent>
      </Modal>
  );
}