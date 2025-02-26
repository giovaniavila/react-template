import { Button } from "@chakra-ui/react";

const handleClick = () => {
  console.log("button clicked");
};

export function CustomButton() {
  return (
    <Button colorScheme="blue" rounded={"3xl"} onClick={handleClick}>
      Button
    </Button>
  );
}
