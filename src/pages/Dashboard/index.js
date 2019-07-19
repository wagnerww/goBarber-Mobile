import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Stack")}>
        <Text>Vai para o Stack</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: "Agendamentos",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  )
};
