import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Sobre Nosotros</Heading>
      <Button as={Link} to="/" colorScheme="blue" mt={4}>
        Volver a Inicio
      </Button>
    </Box>
  );
};

export default About;
