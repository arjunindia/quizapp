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
  }

  useEffect(() => {
    let isApiSubscribed = true;

    if (
      localStorage.getItem("name") === null ||
      localStorage.getItem("email") === null
    ) {
      navigate("/");
    }
    if (Number(localStorage.getItem("marks")) > 4) {
      if (isApiSubscribed) {
        handleEmail();
      }
    } else {
      setLoaded(true);
    }
    return () => {
      isApiSubscribed = false;
    }
  },[]);
  return (
    loaded ? (
    <Box
      minH={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
    >
      <Text fontSize="2xl">Result</Text>
      <Text fontSize="xl">Your score is: {localStorage.getItem("marks")}</Text>
        {Number(localStorage.getItem("marks")) > 4 ? (<>
          <Text fontSize="xl" maxW="600px" w="90vw" textAlign="center">Here is your certificate!</Text>
          <Flex gap="5" p="5">
            <Button onClick={() => window.open(`/Pdf?name=${localStorage.getItem("name")}`)}>Download</Button>
            <Button onClick={() => navigate("/")}>Exit</Button>
          </Flex>
        </>
      ) : (
            <>
        <Text fontSize="xl">
          You need to score at least 5 marks to get the certificate!
        </Text>
              <Button mt="10" onClick={() => navigate("/quiz")}>Retry</Button>
            </>
      )}
    </Box>
    ) : (<Text minH={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column" fontSize="xl">Loading... Please don't refresh, close or press the back button!</Text>)
  );
}
