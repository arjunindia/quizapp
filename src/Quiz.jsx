import {
  Box,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [value, setValue] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  function setIndex(index, value) {
    setValue((prev) => {
      const arr = [...prev];
      arr[index] = value;
      return arr;
    });
  }
  useEffect(() => {
    if (
      localStorage.getItem("name") === null ||
      localStorage.getItem("email") === null
    ) {
      navigate("/");
    }
    fetch("./quiz.json").then((res) => {
      res.json().then((data) => {
        setQuestions(data);
      });
    });
  }, []);
  return (
    <Box
      w={"80vw"}
      maxW={600}
      minH={"100vh"}
      mx={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"start"}
    >
      {questions.map((val, index) => (
        <Choice
          key={index}
          question={val.question}
          index={index}
          value={value}
          setIndex={setIndex}
          options={val.options}
          isError={isError && value[index] === undefined}
        />
      ))}

      <Button
        colorScheme={"teal"}
        alignSelf="flex-end"
        my="20px"
        onClick={() => {
          if (value.length !== questions.length || value.includes(undefined)) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          console.log(value);
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

function Choice({ question, index, value, setIndex,options,isError }) {
  return (
    
    <FormControl isInvalid={isError}>
    <Box py={"20px"} mx="10px">
      <Text fontSize="2xl" mb={"10px"}>
        {question}
      </Text>
      <RadioGroup
        onChange={(val) => setIndex(index, val)}
        value={value[index]}
        py={"10px"}
      >
        <Stack direction={["column","row"]} justifyContent={"space-between"}>
          {/* <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio> */}
            {options.map((val, index) => (
                <Radio key={index} value={`${index+1}`}>
                    {val}
                </Radio>
            ))}
        </Stack>
      </RadioGroup>
      
      <FormErrorMessage>Please answer all questions!</FormErrorMessage>
    </Box>
    
    </FormControl>
  );
}
