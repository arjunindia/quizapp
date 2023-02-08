import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Box,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  export default function Intro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
      if (name.trim() !== "" && email.trim() !== "") {
        setEnabled(true);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      } else {
        setEnabled(false);
      }
    }, [name, email]);
    return (
      <Box
        maxW={600}
        w={"90vw"}
        minH={"calc(100vh - 70px)"}
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            mb={10}
            size={`lg`}
            shadow={"sm"}
            placeholder={"Enter your email here..."}
            autoComplete={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
          pointerEvents={!enabled && "none"}
        >
          <Link to="/quiz">
            <Button colorScheme={enabled ? "teal" : "gray"}>
              Continue to quiz
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }