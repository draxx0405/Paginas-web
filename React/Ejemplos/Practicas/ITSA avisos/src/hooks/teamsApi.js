import { Client } from '@microsoft/microsoft-graph-client';
import { getAccessToken } from './useAuth';


    export const sendMessage = async (chatId, message) => {
        const token = await getAccessToken();
        const client = Client.init({
            authProvider: (done) => {
                done(null, token);
            },
        });

        try {
            const response = await client
                .api(`/chats/${chatId}/messages`)
                .post({
                    body: {
                        content: message,
                    },
                });
            console.log('Mensaje enviado:', response);
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    const uploadFile = async (file) => {
        const token = await getAccessToken();
        const client = Client.init({
            authProvider: (done) => {
                done(null, token);
            },
        });

        try {
            const response = await client
                .api('/me/drive/root:/' + file.name + ':/content')
                .put(file);
            console.log('Archivo subido:', response);
            return response;
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    export const sendMessageWithAttachment = async (chatId, message, file) => {
        const uploadedFile = await uploadFile(file);
        if (!uploadedFile) return;

        const token = await getAccessToken();
        const client = Client.init({
            authProvider: (done) => {
                done(null, token);
            },
        });

        try {
            const response = await client
                .api(`/chats/${chatId}/messages`)
                .post({
                    body: {
                        content: message,
                    },
                    attachments: [
                        {
                            '@odata.type': '#microsoft.graph.fileAttachment',
                            name: uploadedFile.name,
                            contentBytes: uploadedFile.file, // Aquí debes convertir el archivo a base64
                        },
                    ],
                });
            console.log('Mensaje con archivo enviado:', response);
        } catch (error) {
            console.error('Error al enviar el mensaje con archivo:', error);
        }
    };
