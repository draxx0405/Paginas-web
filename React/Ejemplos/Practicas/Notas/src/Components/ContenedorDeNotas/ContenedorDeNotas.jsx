import { Stack, Box, IconButton } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import Notas from '../Notas/Notas';
import { useState, useEffect } from "react"; // Importa useEffect

export default function ContenedorDeNotas({ controles = [] }) { // Valor por defecto para controles
    const [notasAgrupadas, setNotasAgrupadas] = useState({});

    // Agrupar las notas por NomNota
    const agruparNotas = () => {
        const agrupadas = {};

        // Verifica que controles esté definido y sea un arreglo
        if (controles && Array.isArray(controles)) {
            controles.forEach((item) => {
                if (!agrupadas[item.NomNota]) {
                    agrupadas[item.NomNota] = [];
                }
                agrupadas[item.NomNota].push(item);
            });

            setNotasAgrupadas(agrupadas);
        }
    };

    // Ejecutar la agrupación al cargar el componente o cuando cambien los controles
    useEffect(() => {
        agruparNotas();
    }, [controles]); // Dependencia: controles

    return (
        <Box
            width="82vw"
            height="calc(95vh - 80px)" // 100% de la altura menos el margen superior
            overflowY="auto"
            scrollBehavior="smooth"
            p={4}
            mt={5}
            mb={5}
            css={{
                // Estilos personalizados para el scroll
                "&::-webkit-scrollbar": {
                    width: "12px", // Ancho del scroll
                },
                "&::-webkit-scrollbar-track": {
                    background: "#f1f1f1", // Color de fondo del track
                    borderRadius: "10px", // Bordes redondeados
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#A30B37", // Color del thumb (barra del scroll)
                    borderRadius: "10px", // Bordes redondeados
                    border: "3px solid #f1f1f1", // Borde alrededor del thumb
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: "#7A0829", // Color del thumb al pasar el mouse
                },
            }}
        >
            <Stack
                spacing={4}
                width="100%"
                minWidth="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
            >
                {/* Renderizar las notas agrupadas */}
                {Object.keys(notasAgrupadas).map((nomNota, index) => (
                    <Box key={index}>
                        <Notas controles={notasAgrupadas[nomNota]} />
                    </Box>
                ))}

                {/* Botón para agregar nueva nota */}
                <IconButton
                    backgroundColor="white"
                    isRound={true}
                    height="60px"
                    width="59px"
                    icon={<CiCirclePlus size={90} color="#A30B37" />}
                />
            </Stack>
        </Box>
    );
}