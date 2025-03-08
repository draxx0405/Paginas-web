import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Sobre Nosotros</Heading>
      <Button as={Link} to="/about" colorScheme="blue" mt={4}>
        Click me
      </Button>
    </Box>
  );
};

export default Home;
