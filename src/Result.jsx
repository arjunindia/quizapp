import { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

export default function result() {
  const [loaded, setLoaded] = useState(false);
  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  
  function handleEmail() {
    window.open(`/Pdf?name=${localStorage.getItem("name")}`);
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
        </>
      ) : (
        <Text fontSize="xl">
          You need to score at least 5 marks to get the certificate!
        </Text>
      )}
    </Box>
    ) : (<Text minH={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column" fontSize="xl">Loading... Please don't refresh, close or press the back button!</Text>)
  );
}
