import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        2021 -{" "}
        <Link href="https://www.northernmonkeydesign.co.uk" isExternal>
          northernmonkeydesign.co.uk
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
