import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../components/UserContext/UserContext'; 
import { Box,Button,Heading,Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { user } = useUser();
    const { handleLogin,handleLogout } = useAuth();
    const navigate = useNavigate()
    
    const handleLoginClick = async () => {
        await handleLogin(); 
        navigate('/Inicio'); 
    };
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
            <Card margin={10}>
                {user ? (
                    <Box display='flex' padding={5} borderRadius={15} justifyContent='center' >
                        <Heading>Bienvenido, {user.name}!</Heading>
                        <Button onClick={() => navigate('/Inicio') } width='50%' margin={10}>Continuar</Button>
                    </Box>
                ) : (
                    
                    <Box display='flex' padding={5} borderRadius={15} justifyContent='center' >
                        <Heading>Bienvenido a ITSA Avisos</Heading>
                        <Button onClick={handleLoginClick} width='50%' margin={10}>Continuar</Button>
                    </Box>
                )}
            </Card>
        </Box>
    );
}