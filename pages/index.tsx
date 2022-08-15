import { Box, Link, ColorModeScript, Container, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import container from "../styles/framerVariations"
import Header from "../components/Header";
import Footer from '../components/Footer';
import { motion } from "framer-motion";


const Home: NextPage = () => {
  return (
    <Flex
      gap={10}
      flexDir="column"
      h={"container.sm"}
      justify="center"
      width={"100%"}
    >
      <Box w={[300, 400, 500]}>
        <Heading mb={4}>
          Hei
          <span className="wave">👋🏼</span>
        </Heading>
        <HStack>
          <Text fontSize="xl" style={{ display: "inline-block" }}>
            Jeg er{" "}
            <strong style={{ fontWeight: "bold", display: "inline-block" }}>
              Fabian Solheim
            </strong>
            . Jeg er en 21 år gammel informatikkstudent, og utvikler.
          </Text>
        </HStack>
      </Box>

      <Box w={[300, 400, 500]}>
        <Text fontSize="xl">
          Ta gjerne en titt på{" "}
          <Link textDecoration="underline" href="/blog">
            min blogg
          </Link>
          ,
          <Link
            href="https://www.linkedin.com/in/FabianSolheim"
            style={{ textDecoration: "underline" }}
          >
            {" "}min LinkedIn
          </Link>
          , eller{" "}
          <Link
            href="https://www.github.com/FabianSolheim"
            style={{ textDecoration: "underline" }}
          >
            min Github
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};

export default Home
