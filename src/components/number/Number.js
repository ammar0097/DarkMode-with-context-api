import React, { useState } from "react";
import {
  Heading,
  Input,
  Button,
  Text,
  Spinner,
  Center,
  GridItem,
  Grid,
  
} from "@chakra-ui/react";

const Number = () => {
  const [input, setInput] = useState(0);
  const [number, setNumber] = useState(null);
  const [fact, setFact] = useState("Enter a number!");
  const [isLoading, setIsLoading] = useState(false);
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(input);
    setIsLoading(true);
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`http://numbersapi.com/${input}`);
    const data = await response.text();
    setFact(data);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <Grid>
      <GridItem colSpan={2}>
        <Heading
          as="h1"
          size="4xl"
          style={{ color: "#2c7a7b", marginTop: 100 }}
        >
          <Center>{number}</Center>
        </Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          <Text fontSize="3xl" style={{ marginTop: 20, marginBottom: 20 }}>
            {fact}
          </Text>
        )}

        <form>
          <Input
            size="lg"
            type="number"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            colorScheme="teal"
            style={{ marginTop: 20 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
};

export default Number;
