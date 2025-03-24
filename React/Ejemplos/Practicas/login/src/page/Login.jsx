import { TbPasswordUser } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import {
    Box, VStack, Heading, Input, FormControl, FormLabel,
    Card, InputGroup, InputRightElement, Button,
    Alert, AlertIcon, AlertTitle, AlertDescription, Link,
    InputLeftElement,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {
    const [show, setShow] = useState(false);
    const togglePasswordVisibility = () => setShow(!show);

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({ user: false, pass: false });
    const [menssageError, setMessageError] = useState('');

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

    const handleUserChange = (e) => setUser(e.target.value);
    const handlePassChange = (e) => setPass(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        ValidarCampos();
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            backgroundColor=" #0093E9"
            backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 70%)"
            animation="gradient 10s ease infinite"
            sx={{
                '@keyframes gradient': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            }}
        >
            <Card width={450} p={6} borderRadius="lg" boxShadow="lg" bg="whiteAlpha.900">
                <VStack spacing={6} align="stretch">
                    <Heading textAlign="center" fontSize="2xl" mb={4} fontFamily="Poppins, sans-serif">
                        Inicio de sesión
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel fontSize="lg">Usuario</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <FaRegUser size="20" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Ingresa tu usuario..."
                                    variant="filled"
                                    onChange={handleUserChange}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize="lg">Contraseña</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <TbPasswordUser size="20" />
                                </InputLeftElement>
                                <Input
                                    type={show ? 'text' : 'password'}
                                    placeholder="Ingresa tu contraseña"
                                    variant="filled"
                                    onChange={handlePassChange}
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