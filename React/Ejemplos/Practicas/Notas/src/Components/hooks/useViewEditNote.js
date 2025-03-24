import  { useState, useEffect } from "react";

export default function useViewEditNote(){

    // Estados para los campos del formulario
    const [NomNota, setNomNota] = useState("");
    const [TipoDeControl, setTipoDeControl] = useState("");
    const [ControlText, setControlText] = useState("");

    // Estado para el arreglo de registros
    const [registros, setRegistros] = useState([]);
    // Guardar un nuevo registro en el arreglo y en el localStorage
    const agregarRegistro = () => {
        const nuevoRegistro = {
            NomNota: NomNota,
            TipoDeControl: TipoDeControl,
            ControlText: ControlText,
        };

        const nuevosRegistros = [...registros, nuevoRegistro];
        setRegistros(nuevosRegistros);
        localStorage.setItem("registros", JSON.stringify(nuevosRegistros));

        // Limpiar campos después de guardar
        setNomNota("");
        setTipoDeControl("");
        setControlText("");
        alert("Registro agregado");
    };

    // Eliminar todos los registros del localStorage
    const eliminarRegistros = () => {
        localStorage.removeItem("registros");
        setRegistros([]);
        alert("Registros eliminados");
    };
    return {agregarRegistro,eliminarRegistros};
}