import {Flex, Spacer, Link, Heading} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

 const Header = () => {
  return (
      <Flex as="nav" mt={6}>
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to={'/'}>
            fabiansolhe.im
          </Link>
        </Heading>
        <Spacer />
        <ToggleColorMode />
      </Flex>
  );
};

export default Header;