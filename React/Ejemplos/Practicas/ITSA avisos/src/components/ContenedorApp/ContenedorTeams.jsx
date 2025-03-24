import {
    Box,
    Text,
    Flex,
    Grid,
    Checkbox,
    CheckboxGroup,
    Stack,
    Heading,
    Button,
    Textarea,
    FormLabel
} from "@chakra-ui/react";
import FileUpload from "../drag and drop archivos/DragAndDrop";

export default function ContenedorTeams() {
    return (
        <Flex
            flexDirection="column"
            height="100vh" // Ocupa toda la altura de la pantalla
        >
            <Grid
                templateRows="220px 1fr" // Primera fila de 180px, segunda fila ocupa el resto
                height="100%" // El Grid ocupa todo el espacio del Flex
            >
                {/* Primera fila */}
                <Box
                    backgroundColor="#A30B37"
                    margin={5}
                    borderWidth={2}
                    borderColor="white"
                    borderRadius={20}
                    padding={4}
                >
                    <Heading color="white" size="2xl" mb={5}>Carreras</Heading>
                    <Text color="white" size="20px" mb={5}>¿A quien desea enviar el mensaje?</Text>
                    <Box justifyContent="center" width="100%" display="flex">
                        <CheckboxGroup colorScheme='whiteAlpha'>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                <Checkbox color="white" value='Industrial'>Ing. Industrial</Checkbox>
                                <Checkbox color="white" value='Electromecanica'>Ing. Electrómecanica</Checkbox>
                                <Checkbox color="white" value='Sistemas'>Ing. Sistemas</Checkbox>
                                <Checkbox color="white" value='Gestion'>Ing. Gestión</Checkbox>
                                <Checkbox color="white" value='Mecatronica'>Ing. Mecatrónica</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                </Box>

                {/* Segunda fila */}
                <Box>
                    <Box
                        backgroundColor="#A30B37"
                        margin={5}
                  
                        borderRadius={20}
                        padding={4}
                    >
                        <Heading size="lg" color="white" mb={5}>Cuerpo del mensaje</Heading>
                        <Grid
                        templateColumns="1fr 200px" 
                        height="100%"
                        gap={10}> 
                        <Box mb={5}>
                            <FormLabel htmlFor="message" srOnly>Cuerpo del mensaje</FormLabel>
                            <Textarea id="message" height="220px" placeholder="Escribe tu mensaje aquí..." color="white" _placeholder={{color:'white'}}/>
                        </Box>
                         <FileUpload />
                        </Grid>
                        <Box
                            mt={5}
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Button aria-label="Cancelar mensaje" color="black">Cancelar Mensaje</Button>
                            <Button aria-label="Enviar mensaje" colorScheme="green">Enviar Mensaje</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Flex>
    );
}