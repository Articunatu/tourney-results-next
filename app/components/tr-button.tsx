import { Button } from "@chakra-ui/react";

export default function TrButton() {
  return (
    <Button
      size="lg"
      colorScheme="teal"
      bgGradient="linear(to-r, teal.400, blue.500)"
      _hover={{ bgGradient: "linear(to-r, teal.500, blue.600)", boxShadow: "xl" }}
      borderRadius="lg"
      px={8}
      py={6}
      fontSize="lg"
      fontWeight="bold"
      color="white"
    >
      Click Me
    </Button>
  );
}
