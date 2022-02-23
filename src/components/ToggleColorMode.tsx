import React from 'react';
import {Box, Center} from "@chakra-ui/react";
import { ColorModeSwitcher } from './styling/ColorModeSwitcher';

function ToggleColorMode() {
    return (
    <Box>
      <Center>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Center>
    </Box>
    );
  }
  

export default ToggleColorMode;
