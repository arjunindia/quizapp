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
  
  function handleEmail() {
        emailjs.init("QNlZXxQmXtYkYEXaa");
        var templateParams = {
          name: localStorage.getItem("name"),
          message: `${window.location.origin}/GoalPdf?name=${localStorage.getItem("name")}&InstName=${localStorage.getItem("InstName")}&location=${localStorage.getItem("location")}`,
          reply: localStorage.getItem("email"),
        };
        emailjs
          .send("service_6g1oyon", "template_zyvtwmu", templateParams)
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

 
          <Text fontSize="xl" maxW="600px" w="90vw" textAlign="center">Check your email for the certificate!</Text>

    </Box>
    ) : (<Text minH={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column" fontSize="xl">Loading... Please don't refresh, close or press the back button!</Text>)
  );
}
