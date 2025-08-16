import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Profile from './src/screens/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name='Search' component={Search}
        options={{ headerStyle: { backgroundColor: 'blue' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}
      />
      <Stack.Screen name='Home' component={Home}
        options={{ title: 'Welcome Home' }}
      />

      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false,
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* The Home component should have a button to navigate to Profile */}

      <TabNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})