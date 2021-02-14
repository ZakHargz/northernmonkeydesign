import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  useMediaQuery,
  Heading, FormControl, FormLabel,
  Input, Textarea
} from "@chakra-ui/react";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const CTASection = () => {
const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box textAlign="center" marginTop={4}>

    {/* <Box borderWidth={1}
    //     px={4}
    //     width='full'
    //     maxWidth='1000px'
    //     borderRadius={4}
    //     textAlign='center'
    //     boxShadow='lg'
    //   >
    //     <Box p={4}>
    //
    //           <Box textAlign='center'>
    //   <Heading>Contact Us</Heading>
    // </Box>
    //
    //
    // <Box my={8} textAlign='left'>
    //   <form>
    //
    //     <FormControl>
    //       <FormLabel>Name</FormLabel>
    //       <Input type='text' placeholder='Enter your name' />
    //     </FormControl>
    //
    //     <FormControl>
    //       <FormLabel>Email</FormLabel>
    //       <Input type='email' placeholder='Enter your email' />
    //     </FormControl>
    //
    //     <FormControl>
    //       <FormLabel>Message</FormLabel>
    //       <Textarea type='textarea' placeholder='Enter your message' />
    //     </FormControl>
    //
    //     <Button variantcolor="blue" type="submit" mt={4}>Submit</Button>
    //
    //   </form>
    // </Box>
    //
    //     </Box>
    //   </Box>
      */}
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          isExternal
	  href="https://www.facebook.com/Northern-Monkey-Design-158326569304466/?view_public_for=158326569304466"
        >
	  <IconContext.Provider value={{ style: { color: "blue" }}}>
	    <AiFillFacebook size={50} />
	  </IconContext.Provider>
        </Link>
        <Link
          isExternal
          href="https://www.instagram.com/mrnorthernmonkey"
	>
	  <IconContext.Provider value={{ style: { color: "teal" }}}>
	    <AiFillInstagram size={50} />
	  </IconContext.Provider>
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
