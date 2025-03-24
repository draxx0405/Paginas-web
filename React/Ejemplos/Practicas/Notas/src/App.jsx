import { useState } from 'react'
import {Box} from '@chakra-ui/react'
import './App.css'
import BarraSuperior from './Components/BarraSuperior/BarraSuperior';
import ContenedorDeNotas from "./Components/ContenedorDeNotas/ContenedorDeNotas"
import useContenedorDeNotas from './hooks/useContenedorDeNotas';

function App() {
    //const {registros}=useContenedorDeNotas;
   const registros=[
    { NomNota: "Nota 1", tipo: "text", text: "Hola" },
    { NomNota: "Nota 2", tipo: "checkbox", text: "logo.png" },
    { NomNota: "Nota 3", tipo: "list", text: "Mundo" },
   ];
    return (
        <Box
          display="block"
          gap="10px"
          minHeight="100%"
          height="100vh"
          minWidth="100%"
          width="100vw"
          justifyItems="center"
          >
          <BarraSuperior/>
          <ContenedorDeNotas controles={registros}/>
        </Box>
    )
}

export default App