import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';  // Gebruik Expo Router voor navigatie

const DATA = [
  { id: '1', title: 'Barcelona' },
  { id: '2', title: 'London' },
  { id: '3', title: 'Urk' },
];

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = (item) => {
    router.push(`./detail?id=${item.id}&title=${item.title}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
