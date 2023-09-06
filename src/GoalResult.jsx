import { useState, useEffect } from "react";
import { Text, Box, Button, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function result() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  function handleEmail() {
    setLoaded(true);
    fetch("https://clear-goat-97.deno.dev/goal", {
      method: "POST",
      body: JSON.stringify({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        location: localStorage.getItem("location"),
        institution: localStorage.getItem("InstName"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    let isApiSubscribed = true;

    if (
      localStorage.getItem("name") === null ||
      localStorage.getItem("email") === null
    ) {
      navigate("/");
    }
    if (isApiSubscribed) {
      handleEmail();

    } else {
      setLoaded(true);
    }
    return () => {
      isApiSubscribed = false;
    }
  }, []);
  return (
    loaded ? (
      <Box
        minH={"calc(100vh - 70px)"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
      >


        <Text fontSize="xl" maxW="600px" w="90vw" textAlign="center">Here is your certificate!</Text>
        <Flex gap="5" p="5">
          <Button onClick={() => window.open(`/GoalPdf?name=${localStorage.getItem("name")}&InstName=${localStorage.getItem("InstName")}&location=${localStorage.getItem("location")}`)}>Download</Button>
          <Button onClick={() => navigate("/")}>Exit</Button>
        </Flex>

      </Box>
    ) : (<Text minH={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column" fontSize="xl">Loading... Please don't refresh, close or press the back button!</Text>)
  );
}
