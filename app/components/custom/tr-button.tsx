import { Button } from "@chakra-ui/react";
import "./tr-button.css";

const TrButton: React.FC = () => {
  return (
    <Button
      size="lg"
      className="gradient-button" 
      _hover={{
        boxShadow: "lg",
      }}
      _active={{
        transform: "scale(0.98)",
        boxShadow: "xl",
      }}
      borderRadius="full"
      px={8}
      py={6}
      fontSize="lg"
      fontWeight="bold"
      color="white"
    >
      Click Me
    </Button>
  );
};

export default TrButton;
