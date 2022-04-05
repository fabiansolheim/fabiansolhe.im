import {Flex, Spacer, Link, Heading, Box, useMediaQuery} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

 const Header = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
      <Flex as="nav" mt={6}>
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to={'/'}>
            fabiansolhe.im
          </Link>
        </Heading>
        <Spacer />
        <Box mt={-1} mr={isNotMobile ? 0 : 5} >
        <ToggleColorMode />
        </Box>
      </Flex>
  );
};

export default Header;