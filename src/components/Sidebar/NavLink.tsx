import React, { ElementType } from "react";
import { Icon, Text, Link, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType; // usando quando se passa um nome e não o componente direto
  children: string;
}

export default function NavLink({ icon, children, ...props } : NavLinkProps) {
  return (
    <Link {...props} display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
