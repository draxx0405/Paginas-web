import { TbPasswordUser } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import {
    Box, VStack, Heading, Input, FormControl, FormLabel,
    Card, InputGroup, InputRightElement, Button,
    Alert, AlertIcon, AlertTitle, AlertDescription, Link,
    InputLeftElement, useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function LoginResposive() {
    // Estado para mostrar/ocultar la contraseña
    const [show, setShow] = useState(false);
    const togglePasswordVisibility = () => setShow(!show);

    // Estado para los campos y validación
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({ user: false, pass: false });
    const [menssageError, setMessageError] = useState('');

    // Función para validar campos
    const ValidarCampos = () => {
        const newError = {
            user: user.trim() === "",
            pass: pass.trim() === "",
        };
        setError(newError);

        if (newError.user && newError.pass) {
            setMessageError('Campos vacíos. Por favor, llena los campos para continuar.');
        } else if (newError.user) {
            setMessageError('Ingresa un usuario válido para continuar.');
        } else if (newError.pass) {
            setMessageError('Ingresa una contraseña para continuar.');
        }
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        ValidarCampos();
    };

    // Breakpoints para diseño responsivo
    const cardWidth = useBreakpointValue({ base: "90%", md: "400px", lg: "450px" });
    const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const inputFontSize = useBreakpointValue({ base: "md", md: "lg" });

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            backgroundColor=" #0093E9"
            backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
        >
            <Card
                width={cardWidth}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                bg="whiteAlpha.900"
            >
                <VStack spacing={6} align="stretch">
                    <Heading textAlign="center" fontSize={headingSize} mb={4}>
                        Inicio de sesión
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel fontSize={inputFontSize}>Usuario</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <FaRegUser size="20" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Ingresa tu usuario..."
                                    variant="filled"
                                    onChange={(e) => setUser(e.target.value)}
                                    fontSize={inputFontSize}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={inputFontSize}>Contraseña</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <TbPasswordUser size="20" />
                                </InputLeftElement>
                                <Input
                                    type={show ? 'text' : 'password'}
                                    placeholder="Ingresa tu contraseña"
                                    variant="filled"
                                    onChange={(e) => setPass(e.target.value)}
                                    fontSize={inputFontSize}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        size="sm"
                                        onClick={togglePasswordVisibility}
                                        backgroundColor="transparent"
                                        _hover={{ bg: 'transparent' }}
                                        aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    >
                                        {show ? 'Ocultar' : 'Mostrar'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Button
                            mt={6}
                            width="100%"
                            colorScheme="blue"
                            type="submit"
                            _hover={{ bg: 'blue.600' }}
                        >
                            Iniciar sesión
                        </Button>
                    </form>

                    <Link textAlign="center" color="teal.500" href="#">
                        ¿Olvidaste tu contraseña?
                    </Link>

                    {(error.user || error.pass) && (
                        <Alert status="error" borderRadius="md" mt={4} fontSize="sm">
                            <AlertIcon />
                            <Box>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{menssageError}</AlertDescription>
                            </Box>
                        </Alert>
                    )}
                </VStack>
            </Card>
        </Box>
    );
}