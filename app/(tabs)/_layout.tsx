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
          title: 'Home',
          tabBarIcon: ({color, focused}) =>(
            <Ionicons name={focused? "home" : 'home'} color={color} size={25}/>
          ),
           }}
      />

     <Tabs.Screen 
        name="about" 
        options={{
          title: 'About',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused? "heart" : 'heart'} color={color} size={25}/>
          ),
        }}/>

           <Tabs.Screen 
        name="Contador"
        options={{
          title: 'To-Do-List',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused? "skull" : 'skull'} color={color} size={25}/>
          ),
        }}/>
  </Tabs>);
}
