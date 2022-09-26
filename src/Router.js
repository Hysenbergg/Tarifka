import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './pages/Categories';
import Details from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPages" component={Categories} 
          options={{
            title:"Categories",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eceff1",
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: "bold"},
          }} 
        />
        <Stack.Screen name="MealsPages" component={Meals} 
          options={{
            title:"Meals",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eceff1",
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: "bold"},
          }} 
        />
        <Stack.Screen name="DetailPage" component={Details}
          options={{
            title:"Detail",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eceff1",
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: "bold"},
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
