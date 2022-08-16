import React, { useState } from "react";
import { Heading, Input, Button } from "@chakra-ui/react";
const Number = () => {
  const [input, setInput] = useState(0);
  const [number,setNumber] = useState(0);
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault(); 
   setNumber(input);
  };
  return (
    <>
      <Heading as="h1" size="4xl">{number}</Heading>
      <form >
        <Input size="lg" onChange={(e) => setInput(e.target.value)} />
        <Button type="submit" colorScheme="blue" style={{ marginTop: 20 }} onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Number;
