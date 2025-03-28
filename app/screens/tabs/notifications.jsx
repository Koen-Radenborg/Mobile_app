import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const notifications = [
  { id: 1, name: "Captain Fluffypaws 🐱🦸", text: "Hey, krijg jij ook AL deze berichten van Sir Whiskers?" },
  { id: 2, name: "Captain Fluffypaws 🐱🦸", text: "Waarom stuurt hij mij elk uur een update over zijn dutjes?" },
  { id: 3, name: "Captain Fluffypaws 🐱🦸", text: "Oké, nu heeft hij net gemeld dat hij drie keer geeuwde en er niks misging. Wat moet ik hiermee?" },
  { id: 4, name: "Captain Fluffypaws 🐱🦸", text: "HELP. Hij heeft me net gefeliciteerd met het feit dat ik deze notificatie heb geopend." },
  { id: 5, name: "Captain Fluffypaws 🐱🦸", text: "Waarom is er een bericht waarin staat dat ik mijn eigen staart achterna jaag? Dat is PERSOONLIJKE informatie!" },
  { id: 6, name: "Captain Fluffypaws 🐱🦸", text: "Dit is een val. Als ik dit verwijder, krijg ik vast nóg een bericht van hem..." },
];

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}><Text style={styles.icon}>🔔</Text> Notifications</Text>
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationCard}>
          <Image
            source={require("../../../assets/images/yet_another_silly_cat.png")}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{notification.name} <Text style={styles.posted}>posted:</Text></Text>
            <Text style={styles.message}>{notification.text}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  icon: { fontSize: 22 },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  posted: { fontWeight: "normal", color: "#555" },
  message: { fontSize: 14, color: "#333", marginTop: 4 },
});

export default Notifications;
