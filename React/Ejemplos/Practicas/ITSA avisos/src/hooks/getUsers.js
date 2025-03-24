/*import { Client } from '@microsoft/microsoft-graph-client';
import { getAccessToken } from './useAuth';

export const getUsers = async (page = 1, limit = 150) => {
    const token = await getAccessToken();
    const client = Client.init({
        authProvider: (done) => {
            done(null, token);
        },
    });

    try {
        const response = await client
            .api(`/users?page=${page}&limit=${limit}`) // Endpoint para obtener la lista de usuarios
            .get();
            console.log(response);
        return response.value; // Retorna la lista de usuarios
    } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
        throw error;
    }
};

*/

import { Client } from '@microsoft/microsoft-graph-client';
import { getAccessToken } from './useAuth';

export const getUsers = async (nextLink = null) => {
    const token = await getAccessToken();
    const client = Client.init({
        authProvider: (done) => {
            done(null, token);
        },
    });

    try {
        let response;
        if (nextLink) {
            // Si hay un nextLink, úsalo para obtener la siguiente página
            response = await client.api(nextLink).get();
        } else {
            // Primera solicitud para obtener la primera página
            response = await client.api('/users')
            .orderby('displayName')
            .get();
        }
        console.log(response);
        return {
            users: response.value, // Lista de usuarios
            nextLink: response['@odata.nextLink'], // Enlace para la siguiente página
        };
    } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
        throw error;
    }
};