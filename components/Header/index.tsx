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
  Link
} from "@chakra-ui/react";
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
        <Link _hover={{textDecoration: "underline"}} href={"/"}>fabiansolhe.im</Link>
      </Heading>
      <Spacer />
      <Box>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </Flex>
  );
};

export default Header;
