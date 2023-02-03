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
  IconButtonProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";



const ColorModeSwitcher = (props: IconButtonProps): JSX.Element => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
      <IconButton
        size="md"
        fontSize="lg"
        
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    );
  };

const Header = () => {
    const text = useColorModeValue("dark", "light");

  return (
    <Flex as="nav" mt={6}>
      <Heading as="h1" size="lg">
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: "underline" }}>fabiansolhe.im</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <Box>
        <ColorModeSwitcher
          aria-label={`Switch to ${text} mode`}
          justifySelf="flex-end"
        />
      </Box>
    </Flex>
  );
};

export default Header;
