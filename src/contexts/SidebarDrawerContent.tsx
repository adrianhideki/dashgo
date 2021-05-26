import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import React, { createContext, useContext, useEffect } from "react";

interface SidebarDrawerProps {
  children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export default function SidebarDrawerProvider({
  children,
}: SidebarDrawerProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => {
  return useContext(SidebarDrawerContext);
};
