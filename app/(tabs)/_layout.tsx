import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#73C7C7',
      tabBarInactiveTintColor: '#FB773C',
      headerStyle:{
        backgroundColor: '#F7CFD8',
        borderBottomColor: '#73C7C7',
      }, 
      headerTintColor: '#FB773C',
      headerShadowVisible: false,
      tabBarStyle: {
        backgroundColor: '#F7CFD8',
        borderTopColor: '#73C7C7',
      }

    }}
  >
     <Tabs.Screen 
        name="index" 
        options={{
          title: 'Principal',
          tabBarIcon: ({color, focused}) =>(
            <Ionicons name={focused ? "home" : 'home-outline'} color={color} size={25}/>
          ),
           }}
      />

     <Tabs.Screen 
        name="about" 
        options={{
          title: 'Sobre',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "heart" : 'heart-outline'} color={color} size={25}/>
          ),
        }}/>

           <Tabs.Screen 
        name="Contador"
        options={{
          title: 'Lista de Tarefas',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "list" : 'list-outline'} color={color} size={25}/>
          ),
        }}/>
  </Tabs>);
}
