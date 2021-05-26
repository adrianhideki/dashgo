import { forwardRef, ForwardRefRenderFunction } from "react";
import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase : ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, ...props}, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...props}
      />
    </FormControl>
  );
}

const Input = forwardRef(InputBase);

export default Input;