import { Box, ColorModeScript, Container, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import container from "../styles/framerVariations"
import Header from "../components/Header";
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Link from 'next/link';


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
          <Link href="/prosjekter" style={{ textDecoration: "underline" }}>
            mine prosjekter
          </Link>
          , min{" "}
          <Link
            href="https://www.linkedin.com/in/FabianSolheim"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </Link>
          , eller min{" "}
          <Link
            href="https://www.github.com/FabianSolheim"
            style={{ textDecoration: "underline" }}
          >
            Github
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};

export default Home
