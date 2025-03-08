import { useState } from 'react';
import {
  Button,
  Grid,
  GridItem,
  ChakraProvider,
  Box,
  Heading,
  Text,
  Container,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import "./App.css";

function Botones({ value, onSquareClick: onBotonClick }) {
  return (
    <Button onClick={onBotonClick} colorScheme="blue" width="80px" height="80px" fontSize="50px">
      {value}
    </Button>
  );
}

function CacularGanador(AregloBotones) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (AregloBotones[a] && AregloBotones[a] === AregloBotones[b] && AregloBotones[a] === AregloBotones[c]) {
      return AregloBotones[a];
    }
  }
  return null;
}

export default function Board() {
  const [xIsNext, setXIsnext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hook para controlar la alerta
  const [empate, SetEmpate] = useState(false);
  const [puntosX, SetPuntosX] = useState(0);
  const [puntosO, SetPuntosO] = useState(0);

  function handleClick(i) {
    if (squares[i] || CacularGanador(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsnext(!xIsNext);

    const winner = CacularGanador(nextSquares);
    if (winner) {
      if (winner === 'X') {
        SetPuntosX(puntosX + 1);
      } else {
        SetPuntosO(puntosO + 1);
      }
      onOpen();
    } else if (nextSquares.every((square) => square !== null)) {
      SetEmpate(true); // Corregido: Usar SetEmpate en lugar de setSquares
      onOpen();
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null)); // Reinicia el tablero
    setXIsnext(true); // Reinicia el turno
    SetEmpate(false);
    onClose(); // Cierra la alerta
  }

  const winner = CacularGanador(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else if (empate) {
    status = "¡Empate!";
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return (
    <ChakraProvider>
      <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <Container maxW="lg">
          <Heading color="white" backgroundColor="#21646F" width="100%" size="4xl" padding="20px" borderRadius="50px">
            Juego del Gato
          </Heading>
          <Text marginTop="10px" color="black" fontSize="2xl" textAlign="center">{status}</Text>
        </Container>
        <Marcador puntosX={puntosX} puntosO={puntosO} />

        <Box flex="1" display="flex" justifyContent="center" alignItems="center" width="100%">
          <Grid templateColumns="repeat(3, 1fr)" gap={4} p={5}>
            {[...Array(9)].map((_, index) => (
              <GridItem key={index}>
                <Botones value={squares[index]} onSquareClick={() => handleClick(index)} />
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Mostrar la alerta si hay un ganador o empate */}
        {(winner || empate) && (
          <WinnerAlert
            winner={winner}
            onClose={resetGame}
            empate={empate}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

function Marcador({ puntosX, puntosO }) {
  return (
    <Box textAlign="center" marginBottom="20px">
      <Text fontSize="2xl" fontWeight="bold">
        Marcador
      </Text>
      <Text fontSize="xl">
        Jugador X: {puntosX} - Jugador O: {puntosO}
      </Text>
    </Box>
  );
}

function WinnerAlert({ winner, onClose, empate }) {
  return (
    <Alert
      status={empate ? "info" : "success"} // Cambia el color de la alerta si es empate
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="400px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {empate ? "¡Empate!" : "¡Felicidades!"}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {empate ? "El resultado del juego terminó en empate." : "El jugador " + winner + " ha ganado el juego."}
      </AlertDescription>
      <Button mt={4} colorScheme="blue" onClick={onClose}>
        Cerrar
      </Button>
    </Alert>
  );
}