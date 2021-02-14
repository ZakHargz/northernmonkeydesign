import { Flex, Heading, Box } from "@chakra-ui/react";

import AccessibleLink from "../AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
      </AccessibleLink>

      <Box marginLeft="auto">
      </Box>
    </Flex>
  );
};

export default Header;
