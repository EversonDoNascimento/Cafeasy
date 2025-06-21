import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarActiveTintColor: "#F45E4D",
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          position: "absolute",
          height: 90,
          bottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cutlery" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="wishlist"
        options={{
          headerShown: false,
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          title: "Carrinho",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default AppLayout;
