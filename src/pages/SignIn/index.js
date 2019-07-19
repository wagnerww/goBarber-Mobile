import React, { useRef } from "react";
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

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <SubmitButton onPress={() => navigation.navigate("Dashboard")}>
            Acessar
          </SubmitButton>

          <SignLink onPress={() => navigation.navigate("SignUp")}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
