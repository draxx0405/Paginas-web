/*import { Box } from "@chakra-ui/react";
import BarraSuperior from "../components/BarraTop/barraTop";
import Sidebar from "../components/SideBar/SideBar";
import ContenedorTeams from '../components/ContenedorApp/ContenedorTeams'

export default function App() {

  return (
    <Box 
    backgroundColor="#F5F5FB"
    width="100vw" 
    height="100vh" 
    overflow="hidden"
    >   
        <BarraSuperior />
        <Box display='flex'>
          <Sidebar ButtonCheck={1}/>
            <ContenedorTeams />
        </Box>
    </Box>
  );
}*/

import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Spinner, useToast, Button } from '@chakra-ui/react';
import { getUsers } from '../hooks/getUsers';

function MyProfile() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextLink, setNextLink] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const toast = useToast();

    const fetchUserInfo = async (nextLink = null) => {
        try {
            const { users: newUsers, nextLink: newNextLink } = await getUsers(nextLink);
            setUsers((prevUsers) => [...prevUsers, ...newUsers]); // Agrega los nuevos usuarios
            setNextLink(newNextLink); // Actualiza el nextLink
            setHasMore(!!newNextLink); // Si no hay nextLink, no hay más registros
        } catch (error) {
            toast({
                title: 'Error',
                description: 'No se pudo obtener la información del usuario.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const loadMore = () => {
        fetchUserInfo(nextLink); // Carga la siguiente página
    };

    if (loading && users.length === 0) {
        return (
            <Box textAlign="center" mt={10}>
                <Spinner size="xl" />
                <Text mt={4}>Cargando información del usuario...</Text>
            </Box>
        );
    }

    return (
        <Box p={5}>
            <VStack spacing={4} align="stretch">
                <Text fontSize="xl" fontWeight="bold">Mi Perfil</Text>
                {users.map((user, index) => (
                    <Box p={4} borderWidth={1} borderRadius="lg" key={index}>
                        <Text fontWeight="bold">Nombre: {user.displayName}</Text>
                        <Text>Correo electrónico: {user.mail}</Text>
                        <Text>Puesto: {user.securityIdentifier}</Text>
                        <Text>Departamento: {user.department}</Text>
                    </Box>
                ))}
                {hasMore && (
                    <Button onClick={loadMore} isLoading={loading} mt={4}>
                        Cargar más
                    </Button>
                )}
            </VStack>
        </Box>
    );
}

export default MyProfile;