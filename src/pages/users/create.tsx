import {
  Heading,
  Box,
  Divider,
  Flex,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas devem coincidir"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mg="auto" px="6">
        <Sidebar />
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="bold">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                id="name"
                name="name"
                label="Nome Completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="E-Mail"
                {...register("email")}
                error={formState.errors.email}
              />
              <Input
                id="password"
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              />
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                label="Confirmação de Senha"
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
