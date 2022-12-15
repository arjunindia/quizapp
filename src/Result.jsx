import { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
export default function result() {
  const [loaded, setLoaded] = useState(false);
  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  
  function handleEmail(aborter) {
        emailjs.init("AkMBUDYW6-dVuoScV");
        var templateParams = {
          name: localStorage.getItem("name"),
          message: `${window.location.origin}/Pdf?name=${localStorage.getItem("name")}&marks=${localStorage.getItem("marks")}`,
          reply: localStorage.getItem("email"),
        };
        emailjs
          .send("service_0nm3ebm", "template_p7rv1ex", templateParams)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              setLoaded(true);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
  }

  useEffect(() => {
    const abortController = new AbortController();
    if (
      localStorage.getItem("name") === null ||
      localStorage.getItem("email") === null
    ) {
      navigate("/");
    }
    Number(localStorage.getItem("marks")) > 4 && handleEmail(abortController);
    return () => {
      abortController.abort();
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
          <Text fontSize="xl" maxW="600px" w="90vw" textAlign="center">Check your email for the certificate!</Text>
          <Text maxW="600px" w="90vw" textAlign="center">(Make sure you claim your certificates ASAP since they expire in an hour!)</Text>
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
