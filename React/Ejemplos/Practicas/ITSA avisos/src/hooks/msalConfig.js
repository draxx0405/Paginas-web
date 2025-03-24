import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: 'd56a37b5-aa52-4865-9e18-8ac462c84983', // Reemplaza con tu Client ID
        authority: 'https://login.microsoftonline.com/dae5b909-1318-43fa-9f7e-3dae13a27033', // Reemplaza con tu Tenant ID
        redirectUri: 'https://wmjld15w-5173.usw3.devtunnels.ms/', // URL de redirección
    },
    cache: {
        cacheLocation: 'sessionStorage', // Almacena tokens en sessionStorage
        storeAuthStateInCookie: false,
    },
};

// Inicializa la instancia de MSAL
export const msalInstance = new PublicClientApplication(msalConfig);

// Inicializa la aplicación
msalInstance.initialize().then(() => {
    console.log('MSAL inicializado correctamente');
}).catch((error) => {
    console.error('Error al inicializar MSAL:', error);
});