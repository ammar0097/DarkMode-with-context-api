import React, { useContext, useState } from "react";
import {
  Heading,
  Input,
  Button,
  Text,
  Spinner,
  Center,
  GridItem,
  Grid,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ThemeContext } from "../contexts/themeContext";

const Number = () => {
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState(0);
  const [number, setNumber] = useState("Enter a number!");
  const [fact, setFact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumber(input);
    console.log(isNaN(Number));

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
    <Grid className="animate__bounceIn">
      <GridItem colSpan={2}>
        <Heading
          as="h1"
          size="4xl"
          style={{ color: "#2c7a7b", marginTop: 110 }}
        >
          <Center>{number}</Center>
        </Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          <Text
            fontSize="3xl"
            color={darkMode ? "#f8f8f8" : "#191A19"}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            {fact}
          </Text>
        )}

        <form>
          <Input
            size="lg"
            type="number"
            required
            onChange={(e) => setInput(e.target.value)}
            color={darkMode ? "#f8f8f8" : ""}
          />

          <Button
            type="submit"
            colorScheme="teal"
            style={{ marginTop: 20 }}
            onClick={handleSubmit}
          >
            Fact
          </Button>
          {error && (
            <Alert status="error" style={{ marginTop: 20 }}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </form>
      </GridItem>
    </Grid>
  );
};

export default Number;
