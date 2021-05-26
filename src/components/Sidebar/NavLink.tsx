import React, { ElementType } from "react";
import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; // usando quando se passa um nome e não o componente direto
  children: string;
  href: string;
}

export default function NavLink({ icon, children, href, ...props }: NavLinkProps) {
  return (
    // o passHref gera o efeito do link ao passar o moused
    // utilizar quando n se tem uma tag a dentro do Link do next
    <ActiveLink href={href} passHref> 
      <ChakraLink {...props} display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
