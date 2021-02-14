import { Box } from "@chakra-ui/react";

import SomeImage from "../components/SomeImage";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SomeImage />
      <CTASection />
    </Box>
  );
};

export default Home;
