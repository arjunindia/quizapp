import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Box,
  } from "@chakra-ui/react";
  import {Link} from "react-router-dom"
export default function Intro(){
    return (
        <Box
        maxW={600}
        minH={"100vh"}
        mx={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            mb={10}
            size={`lg`}
            shadow={"sm"}
            placeholder={"Enter your name here..."}
          />

          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            mb={10}
            size={`lg`}
            shadow={"sm"}
            placeholder={"Enter your email here..."}
          />
          <Box w={"100%"} display={"flex"} justifyContent={"flex-end"}>
          <Link to="/quiz">
            <Button colorScheme={"teal"}>Continue to quiz</Button>
          </Link>
          </Box>
        </FormControl>
      </Box>
    )
}