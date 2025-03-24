import  { useState, useEffect } from "react";

export default function useContenedorDeNotas() {
    // Estado para el arreglo de registros
    const [registros, setRegistros] = useState([]);

    // Cargar datos del localStorage al iniciar
    useEffect(() => {
        const storedRegistros = localStorage.getItem("registros");
        if (storedRegistros) {
            setRegistros(JSON.parse(storedRegistros));
        }
    }, []);
    return {registros};
};

