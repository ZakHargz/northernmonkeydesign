import { Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Imgix from "react-imgix";

const SomeImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={500} marginX="auto">
	<Imgix src="./nmd.JPG" width={500} height={500} />
      </Box>
    </>
  );
};

export default SomeImage;
