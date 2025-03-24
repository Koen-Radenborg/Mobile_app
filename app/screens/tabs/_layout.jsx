import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ size }) => <Ionicons name="home-outline" size={size} />,
        }}
      />
      <Tabs.Screen
        name="detail"
        options={{
          title: 'Detail',
          tabBarIcon: ({ size }) => <Ionicons name="search-outline" size={size} />,
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: 'Add Diary',
          tabBarIcon: ({ size }) => <Ionicons name="add-circle-outline" size={size} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ size }) => <Ionicons name="notifications-outline" size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size }) => <Ionicons name="person-outline" size={size} />,
        }}
      />
    </Tabs>
  );
}
