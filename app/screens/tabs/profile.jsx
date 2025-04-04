import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const { username } = JSON.parse(storedUser);
          setUsername(username);
        }
      } catch (e) {
        console.error("Failed to load user", e);
      }
    };

    fetchUsername();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Message */}
      {username ? (
        <Text style={styles.welcomeText}>Welcome, {username} 👋</Text>
      ) : null}

      {/* Header Image */}
      <Image
        source={require('../../../assets/images/this_is_a_very_silly_cat.png')}
        style={styles.headerImage}
      />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/images/this_is_a_very_silly_cat.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{username}</Text>
      </View>

      {/* Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Distinguished traveler, professional napper, and connoisseur of cozy hats...
        </Text>
      </View>

      {/* Favorites */}
      <Text style={styles.favoritesTitle}>❤️ My favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.favoritesContainer}>
        {[1, 2, 3, 4].map((item) => (
          <Image
            key={item}
            source={require('../../../assets/images/this_is_a_very_silly_cat.png')}
            style={styles.favoriteImage}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
    color: "#333",
  },
  headerImage: { width: "100%", height: 200 },
  profileSection: { alignItems: "center", marginTop: -50 },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  bioContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
  },
  bioText: { fontSize: 14, textAlign: "center" },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  favoritesContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  favoriteImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Profile;
