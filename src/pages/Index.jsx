import { Box, Button, Container, Heading, Input, Stack, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaGrinStars, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";

// Removed import of date-fns

const Index = () => {
  const [gratitude, setGratitude] = useState("");
  const [gratitudes, setGratitudes] = useState(() => {
    const savedGratitudes = localStorage.getItem("gratitudes");
    return savedGratitudes ? JSON.parse(savedGratitudes) : [];
  });
  const toast = useToast();

  useEffect(() => {
    localStorage.setItem("gratitudes", JSON.stringify(gratitudes));
  }, [gratitudes]);

  const handleAddGratitude = () => {
    if (gratitude.trim() === "") {
      toast({
        title: "Oops!",
        description: "Can't add an empty gratitude.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newGratitude = {
      text: gratitude,
      timestamp: new Date().toISOString(),
    };
    setGratitudes([...gratitudes, newGratitude]);
    setGratitude("");
    toast({
      title: "Gratitude Added",
      description: "Your gratitude has been added successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py="8">
      <VStack spacing="8">
        <Heading size="2xl" textAlign="center">
          Gratitude Journal 🌟
        </Heading>

        <Box w="100%">
          <Textarea value={gratitude} onChange={(e) => setGratitude(e.target.value)} placeholder="What are you grateful for today?" size="lg" />
        </Box>

        <Button leftIcon={<FaPlus />} colorScheme="pink" size="lg" onClick={handleAddGratitude}>
          Add Gratitude
        </Button>

        <Stack spacing="4" w="100%">
          {gratitudes.map(({ text, timestamp }, index) => (
            <Box key={index} p="4" bg="pink.100" borderRadius="md" boxShadow="md">
              <Stack direction="row" align="center" justify="space-between">
                <Box>
                  <FaGrinStars color="#FABD0F" size="24" />
                  <Text fontSize="lg" color="gray.700">
                    {text}
                  </Text>
                </Box>
                <Text fontSize="sm" color="gray.500">
                  {new Date(timestamp).toLocaleString()}
                </Text>
              </Stack>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
