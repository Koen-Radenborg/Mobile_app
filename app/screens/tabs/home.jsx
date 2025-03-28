import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const DATA = [
  { id: '1', title: 'Barcelona', date: 'maart 2024 - april 2024', image: require("../../../assets/images/yet_another_silly_cat.png") },
  { id: '2', title: 'New York', date: 'januari 2024 - februari 2024', image: require("../../../assets/images/yet_another_silly_cat.png") },
  { id: '3', title: 'Tokyo', date: 'september 2023 - december 2023', image: require("../../../assets/images/yet_another_silly_cat.png") },
];

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = (item) => {
    router.push(`./detail?id=${item.id}&title=${item.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Trips</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});
