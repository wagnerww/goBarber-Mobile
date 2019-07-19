import React from "react";
import { View, Text, Image } from "react-native";

import logo from "../../assets/logo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Background from "../../components/Background";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText
} from "./styles";

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

          <SignLink onPress={() => navigation.navigate("SingIn")}>
            <SignLinkText>Fazer login</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
