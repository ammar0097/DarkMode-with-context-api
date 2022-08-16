import React, { useState } from "react";
import { Heading, Input, Button, Text } from "@chakra-ui/react";
const Number = () => {
  const [input, setInput] = useState(0);
  const [number, setNumber] = useState(0);
  const [fact, setFact] = useState(null);
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(input);
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`http://numbersapi.com/${input}`);
    const data = await response.text();
    setFact(data);
    console.log(data);
  };

  return (
    <>
      <Heading as="h1" size="4xl">
        {number}
      </Heading>
      <Text>{fact}</Text>

      <form>
        <Input size="lg" onChange={(e) => setInput(e.target.value)} />
        <Button
          type="submit"
          colorScheme="blue"
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Number;
