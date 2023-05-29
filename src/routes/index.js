import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/SignIn";
import { Welcome } from "../pages/Welcome";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false}} // tira o header
      />
      <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false}} // tira o header
      />
    </Stack.Navigator>
  );
}
