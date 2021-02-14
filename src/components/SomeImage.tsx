import { Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SomeImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={500} marginX="auto">
	<Image src="/nmd.JPG" width={500} height={500} />
      </Box>
    </>
  );
};

export default SomeImage;
