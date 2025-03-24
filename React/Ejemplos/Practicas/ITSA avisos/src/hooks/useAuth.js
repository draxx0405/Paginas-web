
import { useState, useEffect } from 'react';
import { msalInstance } from './msalConfig';
import { useUser } from '../components/UserContext/UserContext';

export const useAuth = () => {
    const { setUser } = useUser();

    useEffect(() => {
        // Verifica si hay una sesión activa al cargar la aplicación
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
            setUser(accounts[0]);
        }

        // Escucha eventos de MSAL (por ejemplo, inicio de sesión)
        const callbackId = msalInstance.addEventCallback((event) => {
            if (event.eventType === 'LOGIN_SUCCESS' && event.payload.account) {
                msalInstance.setActiveAccount(event.payload.account);
                setUser(event.payload.account);
            }
        });

        // Limpia el callback cuando el componente se desmonta
        return () => {
            if (callbackId) {
                msalInstance.removeEventCallback(callbackId);
            }
        };
    }, [setUser]);

    const handleLogin = async () => {
        try {
            const loginResponse = await msalInstance.loginPopup({
                scopes: ['User.Read','User.ReadBasic.All' ,'Chat.ReadWrite', 'ChatMessage.Send', 'Files.ReadWrite'],
            });
            msalInstance.setActiveAccount(loginResponse.account);
            setUser(loginResponse.account);
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
        }
    };

    const handleLogout = () => {
        msalInstance.logoutPopup();
        setUser(null);
    };

    return { handleLogin, handleLogout };
};


export const getAccessToken = async () => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
        await msalInstance.loginPopup({ scopes: ['User.Read','User.ReadBasic.All', 'Chat.ReadWrite', 'ChatMessage.Send', 'Files.ReadWrite'] });
    }
    const request = {
        scopes: ['User.Read','User.ReadBasic.All', 'Chat.ReadWrite', 'ChatMessage.Send', 'Files.ReadWrite'],
        account: accounts[0],
    };
    const response = await msalInstance.acquireTokenSilent(request);
    return response.accessToken;
};