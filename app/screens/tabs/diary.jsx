import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

const DiaryEntry = () => {
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [entry, setEntry] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📖 New diary entry</Text>

      <Text style={styles.label}>Location of vacation</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location..."
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Banner image</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.plus}>+</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Duration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter duration..."
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Diary entry</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your diary entry..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 5 },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
    paddingVertical: 10,
  },
  imagePicker: {
    height: 120,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  image: { width: "100%", height: "100%", borderRadius: 10 },
  plus: { fontSize: 40, color: "#bbb" },
  submitButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default DiaryEntry;
