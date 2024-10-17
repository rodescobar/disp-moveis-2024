import { SafeAreaView, SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import Detalhes from './components/Detalhes'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView >
    <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>

    </NavigationContainer>
    </SafeAreaView>
  );
}
