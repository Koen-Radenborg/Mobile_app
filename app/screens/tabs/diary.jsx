import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, FlatList } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Picker } from '@react-native-picker/picker';

export default function Diary() {
  const [tripStory, setTripStory] = useState("");  // State voor het reisverhaal
  const [image, setImage] = useState(null);  // State voor de afbeelding
  const [selectedCountry, setSelectedCountry] = useState("");  // State voor het geselecteerde land
  const [savedEntries, setSavedEntries] = useState([]);  // State voor de opgeslagen dagboekitems

  // Functie om een afbeelding te kiezen
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);  // Sla de afbeelding op in de state
    }
  };

  // Functie om het dagboek in te voeren en op te slaan
  const saveDiaryEntry = () => {
    // Validatie van invoer
    if (!tripStory.trim()) {
      Alert.alert("Error", "Please write a story before saving.");
      return;
    }
    
    if (!selectedCountry) {
      Alert.alert("Error", "Please select a country before saving.");
      return;
    }
    
    // Als afbeelding vereist is en geen afbeelding is geselecteerd
    if (!image) {
      Alert.alert("Error", "Please pick an image before saving.");
      return;
    }

    // Sla de nieuwe entry op in de state
    const newEntry = {
      tripStory,
      selectedCountry,
      image,
    };

    setSavedEntries([...savedEntries, newEntry]);

    // Reset de velden na het opslaan
    setTripStory("");
    setSelectedCountry("");
    setImage(null);

    Alert.alert("Success", "Your diary entry has been saved!");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Add Diary Entry</Text>

      {/* TextInput voor reisverhaal */}
      <TextInput
        style={{ height: 100, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Write your travel story..."
        multiline
        value={tripStory}
        onChangeText={setTripStory}
      />

      {/* Picker voor het selecteren van een land */}
      <Text>Select a Country</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        style={{ height: 50, marginBottom: 10 }}
      >
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="Afghanistan" value="afghanistan" />
        <Picker.Item label="Albania" value="albania" />
        <Picker.Item label="Algeria" value="algeria" />
        <Picker.Item label="Andorra" value="andorra" />
        <Picker.Item label="Angola" value="angola" />
        <Picker.Item label="Argentina" value="argentina" />
        <Picker.Item label="Armenia" value="armenia" />
        <Picker.Item label="Australia" value="australia" />
        <Picker.Item label="Austria" value="austria" />
        <Picker.Item label="Belgium" value="belgium" />
        <Picker.Item label="Brazil" value="brazil" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="China" value="china" />
        <Picker.Item label="Denmark" value="denmark" />
        <Picker.Item label="Egypt" value="egypt" />
        <Picker.Item label="France" value="france" />
        <Picker.Item label="Germany" value="germany" />
        <Picker.Item label="India" value="india" />
        <Picker.Item label="Italy" value="italy" />
        <Picker.Item label="Japan" value="japan" />
        <Picker.Item label="Kenya" value="kenya" />
        <Picker.Item label="Mexico" value="mexico" />
        <Picker.Item label="Netherlands" value="netherlands" />
        <Picker.Item label="New Zealand" value="new_zealand" />
        <Picker.Item label="Nigeria" value="nigeria" />
        <Picker.Item label="Norway" value="norway" />
        <Picker.Item label="Russia" value="russia" />
        <Picker.Item label="South Africa" value="south_africa" />
        <Picker.Item label="Spain" value="spain" />
        <Picker.Item label="Sweden" value="sweden" />
        <Picker.Item label="Switzerland" value="switzerland" />
        <Picker.Item label="United Kingdom" value="uk" />
        <Picker.Item label="United States" value="us" />
      </Picker>

      {/* Knop om een afbeelding te kiezen */}
      <Button title="Pick an Image" onPress={pickImage} />

      {/* Afbeelding weergeven als er een is gekozen */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }} />}

      {/* Opslaan knop */}
      <Button title="Save Entry" onPress={saveDiaryEntry} />

      {/* Lijst van opgeslagen dagboekverhalen */}
      {savedEntries.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Saved Entries</Text>
          <FlatList
            data={savedEntries}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#f1f1f1', borderRadius: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Story: {item.tripStory}</Text>
                <Text>Country: {item.selectedCountry}</Text>
                {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginTop: 10 }} />}
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

// Stijlen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 10,
  },
  preview: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
