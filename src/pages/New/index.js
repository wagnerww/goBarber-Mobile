import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../../components/Background";

export default function New() {
  return (
    <Background>
      <SafeAreaView style={{ flex: 1, marginTop: 80 }}>
        <Text>New</Text>
      </SafeAreaView>
    </Background>
  );
}

New.navigationOptions = ({ navigation }) => ({
  title: "Selecione o prestador",
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  )
});
