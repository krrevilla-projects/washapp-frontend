import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";

import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";

const Stack = createStackNavigator();

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["http://localhost:5173/"],
  config: {
    screens: {
      Home: "home",
      About: "about",
    },
  },
};

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen component={AboutContainer} name="About" />
          <Stack.Screen component={HomeContainer} name="Home" />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
