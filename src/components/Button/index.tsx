import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

type Props = {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
};

const Button = ({ type = "button", text, onClick }: Props) => {
  return (
    <ChakraButton
      colorScheme="cyan"
      className="w-full py-2 px-4"
      type={type}
      onClick={onClick}
    >
      {text}
    </ChakraButton>
  );
};

export default Button;
