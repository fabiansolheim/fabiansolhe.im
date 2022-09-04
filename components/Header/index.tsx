import {
  Flex,
  Spacer,
  Heading,
  Box,
  useMediaQuery,
  Center,
  IconButton,
  useColorMode,
  useColorModeValue,
  textDecoration,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";


const ColorModeSwitcher = (props: any) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

const Header = () => {
  return (
    <Flex as="nav" mt={6}>
      <Heading as="h1" size="lg">
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: "underline" }}>fabiansolhe.im</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <Box>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </Flex>
  );
};

export default Header;
