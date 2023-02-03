import { Box, Link, ColorModeScript, Container, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import NextLink from 'next/link';
import container from "../styles/framerVariations"
import Header from "../components/Header";
import Footer from '../components/Footer';
import { motion } from "framer-motion";


const Home: NextPage = () => {

  const dob = new Date("11/28/2000");
  const age = new Date(Date.now() - dob.getTime()).getFullYear() - 1970;
  return (
    <Flex
      gap={10}
      flexDir="column"
      h={"container.sm"}
      justify="center"
      height={"75vh"}
      width={"100%"}
    >
      <Box w={[300, 400, 500]}>
        <Heading mb={4}>
          Hey
          <span className="wave">👋🏼</span>
        </Heading>
        <HStack>
          <Text fontSize="xl" style={{ display: "inline-block" }}>
            My name is{" "}
            <strong style={{ fontWeight: "bold", display: "inline-block" }}>
              Fabian Solheim
            </strong>
            . I am a {age} year old software developer
            living in Oslo, Norway. Currently working as a software developer at <Link href="https://www.moment.team/" style={{ textDecoration: "underline" }}>Moment</Link>.
          </Text>
        </HStack>
      </Box>

      <Box w={[300, 400, 500]} >
        <Text fontSize="xl">
          Feel free to check out{" "}
          <NextLink href="/blog" passHref>
            <Link textDecoration="underline">my blog</Link>
          </NextLink>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/FabianSolheim"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </Link>{" "}
          or{" "}
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
