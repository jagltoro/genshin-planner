import { Pressable, StatusBar } from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {theme, Text, Box} from "./src/Components/Theme";
import LoadAssets from './src/Components/LoadAssets';

import Dashboard from './src/Screens/Dashboard';
import Weapons from './src/Screens/Weapons';
import Characters from './src/Screens/Characters';
import CharacterDetails from './src/Screens/Characters/Details';

const fonts = {
  "Bold": require("./assets/fonts/Ubuntu-Bold.otf"),
  "Light": require("./assets/fonts/Ubuntu-Light.otf"),
  "Regular": require("./assets/fonts/Ubuntu-Regular.otf"),
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent({ navigation,state }) {
  const { routeNames, index } = state;
  return (
    routeNames.map((routeName, indexRoutes) => 
      <Pressable
        key={routeName}
        onPress={() => {
          navigation.navigate(routeName);
        }}
      >
      <Box 
        padding='m' 
        backgroundColor={index === indexRoutes ? 'backgroundLight' : 'transparent'}>
        <Text variant='menu'>{routeName}</Text>
      </Box>
    </Pressable>
  ));
}

function CharacterNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Details" component={CharacterDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets { ...{fonts} }>
      <SafeAreaProvider>
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: '#1D3461',
              marginTop: StatusBar.currentHeight,
            },
          }} 
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Weapons" component={Weapons} />
          <Drawer.Screen name="Characters" component={CharacterNavigation} />
        </Drawer.Navigator>
      </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}